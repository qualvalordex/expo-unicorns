// React Native core
import { StyleSheet, Dimensions } from 'react-native';

// Styles
import { fonts, colors } from '../../styles';

// Get screen dimensions
const dim = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        justifyContent: 'center',
        width: dim.width - 70,
    },

    title: {
        fontFamily: 'ostrich',
        fontSize: fonts.bigger,
        marginBottom: 10,
        color: colors.primary
    },

    text: {
        padding: 15,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: colors.primary,
        fontFamily: 'ostrich',
        fontSize: fonts.big,
        color: colors.primary,
        lineHeight: 22,
        textAlign: 'justify',
        backgroundColor: colors.translucid
    },
});