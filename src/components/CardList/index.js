import React, { Component } from 'react';

import { View } from 'react-native';

import Card from './Card';

import styles from './styles';

const CardList = ({ navigation, data }) => {
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

export default CardList;