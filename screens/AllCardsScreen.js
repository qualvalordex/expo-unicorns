import React, { useState } from 'react';
import { SafeAreaView, View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import AppLoading from 'expo-app-loading'

import CustomButton from '../components/CustomButton';

import SharedStyles from '../styles/shared-styles';

import cardData from  '../data/uucards.json';
import getCardImage from '../misc/getCardImage';

function filterByQuery(query) {
    return cardData.filter(x => x.card_name.toLowerCase().includes(query))
};

export default function AllCardsScreen({ navigation, route }) {
    let data;
    if (route.params.query === false) {
        data = cardData;
    } else {
        data = filterByQuery(route.params.query)
    }
    return(
        <SafeAreaView style={SharedStyles.container}>
            <ImageBackground
                source={require('../assets/bg_menu.png')}
                style={SharedStyles.backgroundImage}
            >
                <View style={SharedStyles.backgroundMask}>
                    <View style={SharedStyles.content}>
                        <View style={styles.header}>
                            <Text style={SharedStyles.defaultTitle}>
                                {route.params?.title}
                            </Text>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.cardlist}>
                                <FlatList
                                    data={data}
                                    keyExtractor={item => item.card_id}
                                    numColumns={2}
                                    renderItem={({item}) => {
                                        return (
                                            <View style={styles.flatListItem}>
                                                <TouchableOpacity
                                                    style={{width:'100%'}}
                                                    onPress={() => navigation.navigate('CardScreen', {card_id:item.card_id, card_name:item.card_name, card_effect:item.card_effect})}
                                                >
                                                    <Image
                                                        style={styles.cardImage}
                                                        source={getCardImage(item.card_id)}
                                                    />
                                                </TouchableOpacity>
                                            </View>
                                        );
                                    }}
                                />
                            </View>
                            <CustomButton value='VOLTAR'
                                onPress={ () => navigation.pop() }
                            />
                        </View>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    header:{
        flexDirection:'row',
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:10
    },
    body: {
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
    },
    cardlist: {
        width:350,
        height:600,
        marginBottom:15,
        alignItems:'center'
    },
    flatListItem: {
        width:160,
        height:240,
        margin:5
    },
    cardImage: {
        width:'100%',
        height:'100%',
        resizeMode:'stretch'
    }
});