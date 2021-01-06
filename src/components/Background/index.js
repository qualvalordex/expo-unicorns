import React from 'react';

import { ImageBackground, View } from 'react-native';

import styles from './styles'

const bg = require('../../../assets/images/bg.png');

const Background = ({ children, style }) => (
    <ImageBackground
        style = { styles.bg }
        source = { bg }
    >
        <View style = {[ styles.mask, style ]}>
            { children }
        </View>
    </ImageBackground>
);

export default Background;