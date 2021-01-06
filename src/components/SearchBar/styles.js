import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../styles';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
    searchBarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: dim.width - 60,
        height: 45,
        marginBottom: 15,
        borderWidth: 2,
        borderRadius: 10,
        backgroundColor: colors.white,
        borderColor: colors.primary,
    },
    
    textField: {
        width: '85%',
        padding: 5,
        color: colors.primary,
        fontFamily: 'ostrich',
        fontSize: fonts.tigh,
        fontWeight: 'normal',
        textTransform: 'uppercase'
    },

    searchButton: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 40,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8,
        backgroundColor: colors.primary
    },

    searchIcon: {
        color: colors.white
    },
});

export default styles;