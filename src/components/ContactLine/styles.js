import { StyleSheet } from 'react-native';

import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
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

export default styles;