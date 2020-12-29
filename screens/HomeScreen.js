import React, { useState } from 'react';
import { Text, SafeAreaView, ImageBackground, View, Image, StyleSheet, TextInput } from 'react-native';

import SharedStyles from '../styles/shared-styles'

import CustomButton from '../components/CustomButton'

export default function HomeScreen({ navigation }) {
    const [text, setText] = useState('')

    return(
        <SafeAreaView style={SharedStyles.container}>
            <ImageBackground
                source={require('../assets/bg_menu.png')}
                style={SharedStyles.backgroundImage}
            >
                <View style={SharedStyles.backgroundMask}>
                    <View style={SharedStyles.content}>
                        <View style={styles.header}>
                            <View style={{marginHorizontal:10}}>
                                <Image
                                    style={styles.headerIcon}
                                    source={require('../assets/ico_horn.png')}
                                />
                            </View>
                            <View style={{marginHorizontal:10}}>
                            <Text style={styles.headerText}>UNICÓRNIOS</Text>
                            </View>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.searchContainer}>
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
                            </View>
                            <View style={styles.separatorContainer}>
                                <Text style={styles.separatorText}>OU</Text>
                            </View>
                            <View style={styles.menuItems}>
                                <CustomButton value='TODAS AS CARTAS'
                                    onPress={ () => navigation.navigate('AllCards', { query:false, title:'CARTAS' })}
                                />
                                <CustomButton value='SOBRE'
                                    onPress={ () => navigation.navigate('About') }
                                />
                            </View>
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
        padding:10,
        marginVertical:50
    },
    headerIcon:{
        width:50,
        height:50
    },
    headerText:{
        fontSize:65,
        fontFamily:'OstrichSans',
        color:'#a356a6'
    },
    body: {
        flexDirection:'column',
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around',
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
    separatorContainer: {
        width:'100%',
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        paddingVertical:10,
    },
    separatorText: {
        fontFamily:'OstrichSans',
        color:'#a356a6',
        fontSize:35
    }
});