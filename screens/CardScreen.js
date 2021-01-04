import React from 'react';
import { SafeAreaView, View, Text, ImageBackground, StyleSheet, Image } from 'react-native';

import SharedStyles from '../styles/shared-styles'

import CustomButton from '../components/CustomButton'

import getCardImage from '../misc/getCardImage'

export default function CardScreen({ navigation, route }) {
    return(
        <ImageBackground
            source={require('../assets/bg_menu.png')}
            style={SharedStyles.backgroundImage}
        >
            <View style={SharedStyles.container}>
                
                <View style={[SharedStyles.header, { flex: 1 }]}>
                    <Text style={[SharedStyles.defaultTitle, { textAlign:'center', lineHeight:50, fontSize:50 }]}>
                        { route.params.card_name }
                    </Text>
                </View>
                
                <View style={[SharedStyles.body, { flex: 4, justifyContent:null }]}>
                    <Image
                        source={getCardImage(route.params.card_id)}
                        style={styles.cardImage}
                    />
                    <Text style={[SharedStyles.defaultSubtitle, { marginTop: 10 }]}>EFEITO</Text>
                    <View style={styles.translation}>
                        <Text style={[SharedStyles.screenText, {lineHeight:30, textAlign:'justify'}]}>
                            { route.params.card_effect }
                        </Text>
                    </View>
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
    cardImage:{
        height:'50%',
        resizeMode:'contain'
    },
    translation:{
        width:'90%',
        marginTop:10,
        backgroundColor:'#ffffffaa',
        borderRadius:15,
        borderColor:'#a356a6',
        borderWidth:2,
        padding:10
    }
});