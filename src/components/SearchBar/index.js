// React & React Native core
import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';

// Icons
import { Ionicons } from '@expo/vector-icons';

// Styles
import styles from './styles';
import { colors } from '../../styles';

export default function SearchBar ({ navigation, children }) { 
    const [text, setText] = useState('');

    return (
        <View style = { styles.searchBarContainer }>
            <TextInput
                style =  { styles.textField }
                placeholder = { children }
                placeholderTextColor = { colors.primary }
                onChangeText = { text => setText(text) }
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