// React and React Native core
import React from 'react';
import { Text, View } from 'react-native';

// Styles
import styles from './styles';

export default function Effect ({ children }) {
    return(
        <View style = { styles.container }>
            <Text style = { styles.title }>
                EFEITO
            </Text>
            <Text style = { styles.text }>
                { children }
            </Text>
        </View>
    );
}