import { StyleSheet, Dimensions } from 'react-native';

import { fonts, colors } from '../../styles';

const dim = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        width: dim.width - 60,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
});

export default styles;