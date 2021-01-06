import React from 'react';

import { View, Text, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';

const Header = ({ children, navigation }) => (
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

export default Header;