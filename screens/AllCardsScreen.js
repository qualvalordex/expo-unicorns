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
        <ImageBackground
            source={require('../assets/bg_menu.png')}
            style={SharedStyles.backgroundImage}
        >
            <View style={SharedStyles.container}>
                
                <View style={SharedStyles.header}>
                    <Text style={SharedStyles.defaultTitle}>
                        {route.params?.title}
                    </Text>
                </View>
                
                <View style={[SharedStyles.body, { flexDirection: 'row' }]}>
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

                <View style={SharedStyles.footer}>
                    <CustomButton value='VOLTAR'
                        onPress={ () => navigation.pop() }
                    />
                </View>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    cardlist: {
        width:'100%',
        height:'100%',
        alignItems:'center'
    },
    flatListItem: {
        flex: 1/2,
        alignItems: 'center',
        justifyContent: 'center',
        height:250,
        margin:5
    },
    cardImage: {
        width:'100%',
        height:'100%',
        resizeMode:'contain'
    }
});