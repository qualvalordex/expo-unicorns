import React from 'react';
import { Text, SafeAreaView, ImageBackground, View, Image, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

import SharedStyles from '../styles/shared-styles'

export default function AboutScreen({ navigation, route }) {
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
                                SOBRE
                            </Text>
                        </View>
                        <View style={styles.body}>
                            <View style={styles.informationContainer}>
                                <View style={styles.subtitleContainer}>
                                    <Text style={SharedStyles.defaultSubtitle}>
                                        DESENVOLVIMENTO
                                    </Text>
                                </View>
                                <Text style={[SharedStyles.screenText, { padding:5 }]}>
                                    PAULO HENRIQUE RODRIGUES
                                </Text>
                            </View>
                            <View style={styles.informationContainer}>
                                <View style={styles.subtitleContainer}>
                                    <Text style={SharedStyles.defaultSubtitle}>
                                        REPORTAR BUGS
                                    </Text>
                                </View>
                                <View style={styles.contactLine}>
                                    <Image 
                                        style={[styles.contactIcon, { marginHorizontal:5 }]}
                                        source={require('../assets/ico_mail.png')}
                                    />
                                    <Text style={[SharedStyles.screenText, { marginHorizontal:5 }]}>
                                        qualvalordex@gmail.com
                                    </Text>
                                </View>
                                <View style={styles.contactLine}>
                                    <Image 
                                        style={[styles.contactIcon, { marginHorizontal:5 }]}
                                        source={require('../assets/ico_github.png')}
                                    />
                                    <Text style={[SharedStyles.screenText, { marginHorizontal:5 }]}>
                                        https://github.com/qualvalordex
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
        marginVertical:50
    },
    body: {
        width:'100%',
        alignItems:'center',
        justifyContent:'space-around'
    },
    informationContainer: {
        width:'100%',
        marginBottom:50,
        alignItems:'center',
        justifyContent:'center'
    },
    subtitleContainer: {
        width:'100%',
        padding:10,
        alignItems:'center',
        justifyContent:'center'
    },
    contactLine: {
        flexDirection:'row',
        width:'100%',
        padding:5,
        alignItems:'center',
        justifyContent:'center'
    },
    contactIcon: {
        width:25,
        height:25
    }
});