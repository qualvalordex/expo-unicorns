// React & React Native core
import React, { Children } from 'react';
import { Text, TouchableOpacity } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles';

export default function Button ({ text, icon, action }) {
    return(
        <TouchableOpacity
            style = { styles.container }
            onPress = { action }
        >
            <Ionicons
                style =  { styles.icon }
                name = { icon }
                size = { 20 }
            />
            <Text
                style = { styles.text }
            >
                { text }
            </Text>
        </TouchableOpacity>
    );
}