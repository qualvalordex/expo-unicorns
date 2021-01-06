import React from 'react';

import { StatusBar, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import Background from '../../components/Background';
import Header from '../../components/Header';

import { fonts, colors } from '../../styles';

import styles from './styles';
import ContactLine from '../../components/ContactLine';

const About = ({ navigation }) => (
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

export default About;