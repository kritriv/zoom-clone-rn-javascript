import { Dimensions, StyleSheet, Text, TextInput, View } from 'react-native';
import colors from '../globals/colors';

const RNTextInput = ({ maxLength, placeholder, value, onChangeText, secureTextEntry, type }) => {
    return (
        <View style={[styles.container]}>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor={colors.grey} 
                value={value}
                onChangeText={onChangeText}
                secureTextEntry={secureTextEntry ? true : false}
                style={[styles.input]}
                cursorColor={colors.blue}
                keyboardType={type}
                maxLength={maxLength}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: Dimensions.get('screen').width,
        paddingHorizontal: 20,
        paddingVertical: 20,
        marginVertical: 10,
        marginLeft: -20,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: colors.lightBlack,
    },
    input: {
        textAlign: 'center',
        color: colors.white,
        fontSize: 16,
        fontFamily: 'PoppinsRegular',
        opacity: 0.5,
        
    }
});

export default RNTextInput;
