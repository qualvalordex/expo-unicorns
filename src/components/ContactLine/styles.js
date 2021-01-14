// React Native core
import { StyleSheet } from 'react-native';

// Styles
import { fonts, colors } from '../../styles';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 5
    },

    icon: {
        marginRight: 5,
        color: colors.darker
    },

    text: {
        fontFamily: 'ostrich',
        fontSize: fonts.big,
        color: colors.darker

    },
});