import { StyleSheet, StatusBar, Platform } from 'react-native';

import { fonts, colors } from '../../styles';

const styles = StyleSheet.create({
    container: {
        height: 60,
        width: '100%',
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: colors.primaryTranslucid,
    },

    icon: {
        color: colors.white
    },

    text: {
        fontFamily: 'ostrich',
        fontSize: fonts.bigger,
        color: colors.white
    },
});

export default styles;