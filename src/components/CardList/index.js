// React & React Native core
import React from 'react';
import { View } from 'react-native';

// Styles
import styles from './styles';

// My components
import Card from './Card';

export default function CardList ({ navigation, data }) {
    return (
        <View style = { styles.container }>
            {
                data.map(card =>
                    <Card
                        key = { card.card_id }
                        card = { card }
                        navigation = { navigation }
                    />
                )
            }
        </View>
    );
}