// React Native core
import { StyleSheet, Dimensions } from 'react-native';

// Get screen dimensions
const dim = Dimensions.get('screen');

export default StyleSheet.create({
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