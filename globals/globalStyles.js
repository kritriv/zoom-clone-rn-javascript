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
    }
});

export default styles;