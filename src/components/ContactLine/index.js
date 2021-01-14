// React & React Native core
import React from 'react';
import { Text, View } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles';

export default function ContactLine ({ children, icon }) {
    return(
        <View style = { styles.container }>
            <Ionicons
                style = { styles.icon }
                name = { icon }
                size = { 20 }
            />
            <Text style = { styles.text }>
                { children }
            </Text>
        </View>
    );
}