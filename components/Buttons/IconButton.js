import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';
import colors from '../../globals/colors';

const IconMap = {
    "facebook": require("../../assets/images/fb.png"),
    "google": require("../../assets/images/google.png"),
    "apple": require("../../assets/images/apple.png"),
    "twitter": "twitter",
    "linkedin": "linkedin",
    "github": "github",
}

const IconButton = ({ text, onClickHandler, buttonStyles, icon, disabled }) => {
  return (
    <View style={{ width: "100%" }}>
        <TouchableOpacity disabled={disabled} style={[styles.button, buttonStyles]} onPress={onClickHandler ? onClickHandler : () => alert("Clicked")}>
            <Image source={IconMap[icon]} style={{ width: 20, height: 20, resizeMode: 'contain' }} />
            <View
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <Text style={styles.text}>{text}</Text> 
            </View>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: colors.lightBlack,
        padding: 15,
        borderRadius: 15,
        borderWidth: 0.5,
        borderColor: colors.white,
    },
    text: {
        color: colors.white,
        textAlign: 'center',
        fontSize: 18,
        fontFamily: 'PoppinsRegular',
    }
});

export default IconButton;