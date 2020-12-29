import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

import SharedStyles from '../styles/shared-styles'

import CustomButton from '../components/CustomButton'

import getCardImage from '../misc/getCardImage'

export default function CardScreen({ navigation, route }) {
    return(
        <SafeAreaView style={SharedStyles.container}>
            <ImageBackground
                source={require('../assets/bg_menu.png')}
                style={SharedStyles.backgroundImage}
            >
                <View style={SharedStyles.backgroundMask}>
                    <View style={[SharedStyles.content, { justifyContent:'center' }]}>
                        <View style={styles.header}>
                            <Text style={[SharedStyles.defaultTitle, { textAlign:'center', lineHeight:50, fontSize:50 }]}>
                                { route.params.card_name }
                            </Text>
                        </View>
                        <View style={styles.body}>
                            <Image
                                source={getCardImage(route.params.card_id)}
                                style={styles.cardImage}
                            />
                            <View style={styles.translationContainer}>
                                <Text style={SharedStyles.defaultSubtitle}>EFEITO</Text>
                                <View style={styles.translation}>
                                    <Text style={[SharedStyles.screenText, {lineHeight:30, textAlign:'justify'}]}>
                                        { route.params.card_effect }
                                    </Text>
                                </View>
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
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        padding:10,
        marginBottom:10
    },
    body: {
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    translationContainer:{
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        marginVertical:25
    },
    cardImage:{
        width:'100%',
        resizeMode:'contain'
    },
    translation:{
        width:300,
        marginTop:15,
        backgroundColor:'#ffffffaa',
        borderRadius:15,
        borderColor:'#a356a6',
        borderWidth:2,
        padding:10
    }
});