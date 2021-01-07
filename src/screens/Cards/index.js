import React from 'react';

import { ScrollView, StatusBar } from 'react-native';

import styles from './styles';
import { colors } from '../../styles'

import Background from '../../components/Background';
import Header from '../../components/Header';
import CardList from '../../components/CardList';

const cardData = require('../../../data/uucards.json');

/* Filtering data from search */
function filterByQuery(query) {
    return cardData.filter(x => x.card_name.toLowerCase().includes(query.toLowerCase()))
};

const Cards = ({ navigation, route }) => {
    let cards;
    if (route.params.query === false) {
        cards = cardData;
    } else {
        cards = filterByQuery(route.params.query)
    }

    return (
        <Background style = { styles.bg }>
            <StatusBar
                backgroundColor = {colors.primaryTranslucid}
                translucent = { false }
            />
            <Header
                navigation = { navigation }
            >
                CARTAS ({ cards.length })
            </Header>
            
            <ScrollView>
                <CardList
                    data = { cards }
                    navigation = { navigation }
                />
            </ScrollView>
        </Background>
    );
}

export default Cards;