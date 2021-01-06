import React from 'react';

import { View, Text, Image, StatusBar } from 'react-native';

import styles from './styles';
import { colors } from '../../styles';

import Background from '../../components/Background';
import SearchBar from '../../components/SearchBar';
import Menu from '../../components/Menu';

const Home = ({ navigation }) => (
    <Background style = { styles.bg }>
        <StatusBar
            backgroundColor = 'transparent'
            translucent = { true }
            barStyle = 'dark-content'
        />
        <View style = { styles.logoContainer }>
            <Image
                style = { styles.logoImage }
                source = { require('../../../assets/images/logo.png') }
            />
            <Text style = { styles.logoText }>
                UNICÓRNIOS
            </Text>
        </View>

        <View>
            <SearchBar
                navigation = { navigation }
            >
                PROCURAR UMA CARTA...
            </SearchBar>
            <Menu
                navigation = { navigation }
            />
        </View>
    </Background>
);

export default Home;