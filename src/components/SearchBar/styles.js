// React Native core
import { StyleSheet, Dimensions } from 'react-native';

// Styles
import { fonts, colors } from '../../styles';

// Get screen dimensions
const dim = Dimensions.get('screen');

export default StyleSheet.create({
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