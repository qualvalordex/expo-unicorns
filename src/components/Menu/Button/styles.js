// React Native core
import { StyleSheet } from 'react-native';

// Styles
import { fonts, colors } from '../../../styles';

export default StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 75,
        height: 50,
        padding: 5,
        borderRadius: 15,
        backgroundColor: colors.primary
    },

    icon: {
        marginBottom: 3,
        color: colors.white
    },

    text: {
        fontSize: fonts.regular,
        fontFamily: 'ostrich',
        color: colors.white
    },
});