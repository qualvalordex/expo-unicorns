import React from 'react';

import { View, Image, TouchableOpacity } from 'react-native';

import styles from './styles';

import getCardImage from '../../../misc/getCardImage';

const Card = ({ navigation, card }) => (
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

export default Card;