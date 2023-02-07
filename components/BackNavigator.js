import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// Icons
import Icon from 'react-native-vector-icons/Ionicons';

// Styles
import colors from '../globals/colors';

const BackNavigator = ({ navigation, text }) => {

    const goBack = () => navigation.goBack();
    return (
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'flex-start',
                width: '100%',
                paddingHorizontal: 20,
                paddingVertical: 10,
                marginVertical: 10,
            }}
        >
            <TouchableOpacity onPress={goBack}>
                <Icon name="ios-chevron-back-outline" size={25} color={colors.blue} />
            </TouchableOpacity>
            <View style={styles.center}>
                <Text style={styles.text}>{text}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        color: colors.white,
        fontSize: 16,
        fontFamily: 'PoppinsRegular',
    },
    center: {
        position: 'absolute', 
        top: 0, 
        left: 0, 
        right: 0, 
        bottom: 0, 
        justifyContent: 'center', 
        alignItems: 'center'
    }
});

export default BackNavigator;