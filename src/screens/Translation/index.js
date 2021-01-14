// React & React Native core
import React from 'react';
import { Image, StatusBar } from 'react-native';

// Styles
import styles from './styles';
import { colors } from '../../styles';

// My components
import Background from '../../components/Background';
import Header from '../../components/Header';
import Effect from '../../components/Effect';

// Operationanl function
import getCardImage from '../../misc/getCardImage';

export default function Translation ({ navigation, route }) {
    return(
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
}