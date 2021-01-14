// React & React Native core
import React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

// My components
import Button from './Button';

export default function Menu ({ navigation }) {
    return(
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
                action = { () => navigation.navigate('About') }
            />
        </View>
    );
}