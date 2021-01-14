// React & React Native core
import React from 'react';
import { Image, TouchableOpacity } from 'react-native';

// Styles
import styles from './styles';

// Operational function
import getCardImage from '../../../misc/getCardImage';

export default function Card ({ navigation, card }) {
    return(
        <TouchableOpacity
            style = { styles.container }
            onPress = { () => navigation.navigate('Translation', { card: card }) }
        >
            <Image
                style = { styles.image }
                source = { getCardImage(card.card_id) }
            />
        </TouchableOpacity>
    );
}