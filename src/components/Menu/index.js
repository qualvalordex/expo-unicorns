import React from 'react';

import { View } from 'react-native';

import Button from './Button';

import styles from './styles';

const Menu = ({ navigation }) => (
    <View style = { styles.container }>
        <Button
            icon = 'ios-apps-sharp'
            text = 'CARTAS'
            action = { () => navigation.navigate('Cards', { query: false }) }
        />
        
        <Button
            icon = 'ios-albums'
            text = 'EXPANSÕES'
            action = { () => alert('Em desenvolvimento...') }
        />
        
        <Button
            icon = 'ios-information-circle'
            text = 'SOBRE'
            action = { () => alert('Em desenvolvimento...') }
        />
    </View>
);

export default Menu;