import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'

export default function CustomButton(props) {
    return(
        <TouchableOpacity  style={styles.buttonContainer} onPress={props.onPress}>
            <Text style={styles.buttonText}>{props.value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonContainer: {
        width:180,
        height:50,
        padding:10,
        marginBottom:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:15,
        backgroundColor:'#a356a6aa',
    },
    buttonText: {
        color:'#fff',
        fontFamily:'OstrichSans',
        fontSize:25
    }
});