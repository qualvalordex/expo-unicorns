import React from 'react';

import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const ContactLine = ({ children, icon }) => (
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

export default ContactLine;