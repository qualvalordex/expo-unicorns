// React & React Native core
import React from 'react';
import { StatusBar, Text } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles';
import { colors } from '../../styles';

// My components
import Background from '../../components/Background';
import Header from '../../components/Header';
import ContactLine from '../../components/ContactLine';

export default function About({ navigation }) {
    return(
        <Background style = { styles.bg }>
            <StatusBar
                backgroundColor = {colors.primaryTranslucid}
                translucent = { false }
            />

            <Header
                navigation = { navigation }
            >
                SOBRE
            </Header>

            <Ionicons
                style = { styles.icon }
                name = 'ios-bug'
                size = { 24 }
            />
            <Text style = { styles.text }>
                REPORTAR BUGS
            </Text>

            <ContactLine icon='ios-mail'>qualvalordex@gmail.com</ContactLine>
            <ContactLine icon='logo-github'>qualvalordex</ContactLine>
        </Background>
    );
}