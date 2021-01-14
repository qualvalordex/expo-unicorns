// React & React Native core
import { StyleSheet, Dimensions } from 'react-native';

// Get screen dimensions
const dim = Dimensions.get('screen');

export default StyleSheet.create({
    container: {
        width: dim.width - 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});