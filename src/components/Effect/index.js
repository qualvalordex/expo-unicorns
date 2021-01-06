import React from 'react';

import { Text, View } from 'react-native';

import styles from './styles';

const Effect = ({ children }) => (
    <View style = { styles.container }>
        <Text style = { styles.title }>
            EFEITO
        </Text>
        <Text style = { styles.text }>
            { children }
        </Text>
    </View>
);

export default Effect;