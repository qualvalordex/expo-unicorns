import React, { useState } from 'react';

import { TextInput, View, TouchableOpacity, Text } from 'react-native';

import { Ionicons } from '@expo/vector-icons';

import { colors } from '../../styles'

import styles from './styles'

const SearchBar = ({ navigation, children }) => { 
    const [text, setText] = useState('');

    return (
        <View style = { styles.searchBarContainer }>
            <TextInput
                style =  { styles.textField }
                placeholder = { children }
                placeholderTextColor = { colors.primary }
                onChangeText = { text => setText(text) }
                defaultValue = { text }
            />
            
            <TouchableOpacity
                style = { styles.searchButton }
                onPress = { () => navigation.navigate('Cards', { query: text }) }
            >
                <Ionicons
                    style = { styles.searchIcon }
                    name = 'search-sharp'
                    size = { 20 }
                />
            </TouchableOpacity>
        </View>
    );
}

export default SearchBar;