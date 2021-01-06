import React from 'react';

import { Image, StatusBar } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

import Background from '../../components/Background';
import Header from '../../components/Header';
import Effect from '../../components/Effect';

import getCardImage from '../../misc/getCardImage';

const Translation = ({ navigation, route }) => (
    <Background
        style = {{ justifyContent: null, alignItems: 'center' }}
    >
        <StatusBar
                backgroundColor = {colors.primaryTranslucid}
                translucent = { false }
        />
        <Header
            navigation = { navigation }
        >
            { route.params.card.card_name }
        </Header>
        
        <Image
            style = { styles.image }
            source = { getCardImage( route.params.card.card_id ) }
        />

        <Effect>
            { route.params.card.card_effect }
        </Effect>
    </Background>
);

export default Translation;