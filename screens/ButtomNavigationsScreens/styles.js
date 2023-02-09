import { StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.black,
        paddingTop: 15,
        paddingTop: 15,
        alignItems: 'center',
    },
    header: {
        color: colors.white,
        fontSize: 16,
    },
    headerWrapper: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: 20,
    },
    addCalendar: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
        height: 60,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#65647C' || colors.grey,
    }
});

export default styles;