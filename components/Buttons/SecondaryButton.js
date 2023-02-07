import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import colors from '../../globals/colors';

const PrimaryButton = ({ text, onClickHandler, buttonStyles }) => {
  return (
    <View style={{ width: "100%" }}>
        <TouchableOpacity style={[styles.button, buttonStyles]} onPress={onClickHandler ? onClickHandler : () => alert("Clicked")}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightBlack,
        padding: 12,
        borderRadius: 15,
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'PoppinsRegular',
    }
});

export default PrimaryButton;