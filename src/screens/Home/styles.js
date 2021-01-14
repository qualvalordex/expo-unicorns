// React Native core
import { StyleSheet, Dimensions } from 'react-native';

// Styles
import { fonts, colors } from '../../styles/';

// Get screen dimensions
const dim = Dimensions.get('screen');

export default StyleSheet.create({
    bg: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
    },

    logoImage: {
        width: 35,
        height: 35,
        marginRight: 10,
    },

    logoText: {
        color: colors.primary,
        fontFamily: 'ostrich',
        fontSize: fonts.extrabig,
    },
});