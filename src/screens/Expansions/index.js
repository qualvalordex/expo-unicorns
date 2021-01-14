// React imports
import React from 'react';
import { StatusBar } from 'react-native';

// Style stuff
import styles from './styles';
import { colors } from '../../styles';

// Mu components
import Background from '../../components/Background';
import Header from '../../components/Header';

export default function Expansions({ navigation }) {
    return(
        <Background style = { styles.bg }>
            <StatusBar
                backgroundColor = {colors.primaryTranslucid}
                translucent = { false }
            />
            <Header
                navigation = { navigation }
            >
                Expansões
            </Header>
        </Background>
    );
}