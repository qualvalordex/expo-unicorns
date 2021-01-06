import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../styles/';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
    bg: {
        alignItems: 'center',
        justifyContent: 'center'
    },

    logoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },

    logoImage: {
        width: 35,
        height: 35,
        marginRight: 10
    },

    logoText: {
        color: colors.primary,
        fontFamily: 'ostrich',
        fontSize: fonts.extrabig,
    },
});

export default styles;