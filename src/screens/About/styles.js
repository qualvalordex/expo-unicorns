import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    bg: {
        alignItems: 'center'
    },

    icon: {
        marginVertical: 5,
        marginTop: 30,
        color: colors.primary
    },

    text: {
        fontFamily: 'ostrich',
        fontSize: fonts.bigger,
        color: colors.primary,
        marginBottom: 10
    },
});

export default styles;