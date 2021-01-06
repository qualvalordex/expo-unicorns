import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../../styles';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        width: (dim.width - 45) / 2,
        height: 200,
        marginBottom: 15,
    },

    image: {
        height: '100%',
        resizeMode: 'contain'
    },
});

export default styles;