import React, { Children } from 'react';

import { Text, TouchableOpacity } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Button = ({ text, icon, action }) => (
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

export default Button;