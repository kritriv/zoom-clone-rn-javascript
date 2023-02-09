import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.black,
    },
    headerText: {
        fontSize: 22,
        color: colors.white,
        fontFamily: 'PoppinsSemiBold',
        textAlign: 'center',
        marginBottom: 10,
    },
    buttonText: {
        fontSize: 15,
        color: colors.white,
        opacity: 0.5,
        textAlign: 'center',
        fontFamily: 'PoppinsRegular',
    }
});

export default styles;