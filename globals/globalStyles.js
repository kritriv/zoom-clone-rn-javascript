import { StyleSheet } from "react-native";
import colors from "./colors";

const styles = StyleSheet.create({
    border: {
        borderWidth: 2,
        borderColor: 'red',
    },
    flex: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%',
    },
    colorWhite: {
        color: colors.white,
    },
    colorLightBlack: {
        color: colors.lightBlack,
    },
    loadingIndicator:{
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1,
        backgroundColor: 'transparent',
        width: 50,
        height: 50,
    }
});

export default styles;