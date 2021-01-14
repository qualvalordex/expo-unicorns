// React & React Native core
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles';

export default function Header ({ children, navigation }) {
    return(
        <View style = { styles.container }>
            <TouchableOpacity
                style = { styles.buttonContainer }
                onPress = { () => navigation.goBack() }
            >
                <Ionicons
                    style = { styles.icon }
                    name = 'ios-arrow-back'
                    size = { 20 }
                />
            </TouchableOpacity>

            <Text style = { styles.text }>
                { children }
            </Text>

            <TouchableOpacity
                style = { styles.buttonContainer }
                onPress =  { () => alert('Em desenvolvimento...') }
            >
                <Ionicons
                    style = { styles.icon }
                    name = 'ios-filter'
                    size = { 20 }
                />
            </TouchableOpacity>
        </View>
    );
}