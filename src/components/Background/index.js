// React & React Native core
import React from 'react';
import { ImageBackground, View } from 'react-native';

// Styles
import styles from './styles'

// Load background image
const bg = require('../../../assets/images/bg.png');

export default function Background ({ children, style }) {
    return(
        <ImageBackground
            style = { styles.bg }
            source = { bg }
        >
            <View style = {[ styles.mask, style ]}>
                { children }
            </View>
        </ImageBackground>
    );
}