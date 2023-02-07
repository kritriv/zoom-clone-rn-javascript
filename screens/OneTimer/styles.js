import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
    },
    fontZoom: {
        fontSize: 40,
        fontFamily: 'PoppinsRegular',
        color: colors.white,
    },
    bottomOptions: {
        width: '100%',
        height: '40%',
        backgroundColor: colors.black,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        position: 'absolute',
        bottom: 0,
        alignItems: 'center',
        padding: 30,
    }
});

export default styles;