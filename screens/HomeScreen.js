import React, { useState } from 'react';
import { Text, SafeAreaView, ImageBackground, View, Image, StyleSheet, TextInput } from 'react-native';

import SharedStyles from '../styles/shared-styles'

import CustomButton from '../components/CustomButton'

export default function HomeScreen({ navigation }) {
    const [text, setText] = useState('')

    return(
        <ImageBackground
            source={require('../assets/bg_menu.png')}
            style={SharedStyles.backgroundImage}
        >
            <View style={SharedStyles.container}>
                
                <View style={SharedStyles.header}>
                    <Image
                        style={styles.headerIcon}
                        source={require('../assets/ico_horn.png')}
                    />
                    <Text style={[SharedStyles.defaultTitle, { marginHorizontal: 10 }]}>UNICÓRNIOS</Text>
                </View>

                <View style={SharedStyles.body}>
                    <TextInput
                        style={styles.searchBar}
                        placeholder='DIGITE PARA PESQUISAR...'
                        placeholderTextColor='#a356a6'
                        onChangeText={ text => setText(text) }
                        defaultValue={text}
                    />
                    <CustomButton value='PESQUISAR'
                        onPress={ () => navigation.navigate('AllCards', { query:text.toLowerCase(), title:'RESULTADO' })}
                    />
                    <Text style={[SharedStyles.defaultSubtitle, { marginBottom: 10 }]}>OU</Text>
                    <CustomButton value='TODAS AS CARTAS'
                        onPress={ () => navigation.navigate('AllCards', { query:false, title:'CARTAS' })}
                    />
                    <CustomButton value='SOBRE'
                        onPress={ () => navigation.navigate('About') }
                    />
                </View>

                <View style={SharedStyles.footer}></View>
                
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    headerIcon:{
        width:50,
        height:50,
        marginHorizontal: 10
    },
    searchContainer: {
        width:'100%',
        alignItems:'center',
        justifyContent:'center'
    },
    searchBar:{
        width:'85%',
        height:60,
        padding: 15,
        marginBottom:10,
        borderRadius: 15,
        borderWidth: 2,
        borderColor:'#a356a6',
        backgroundColor:'#dabadaaa',
        fontFamily:'OstrichSans',
        fontWeight:'normal',
        fontSize:25,
        color:'#ffffff',
    },
    separatorText: {
        fontFamily:'OstrichSans',
        color:'#a356a6',
        fontSize:35
    }
});