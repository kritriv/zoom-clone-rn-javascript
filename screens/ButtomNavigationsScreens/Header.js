import { View, Text, StatusBar } from "react-native";

// Styles
import colors from "../../globals/colors";
import globalStyles from "../../globals/globalStyles";
import styles from "./styles";

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const Header = ({header}) => {
    return (
        <>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.black} 
            />
            <View style={[styles.headerWrapper]}>
                <View style={[globalStyles.center]}>
                    <Text style={[styles.header]}>{header}</Text>
                </View>
                <AntDesign name="infocirlceo" size={18} color={colors.white} />
            </View>
        </>
    );
}

export default Header;