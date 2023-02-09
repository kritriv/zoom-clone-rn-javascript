import { View, Text } from "react-native";

// Styles
import colors from "../../../globals/colors";
import styles from "../styles";


// Components
import Header from "../Header";
import { PrimaryButton, SearchBar } from "../../../components";
import ChatIcon from "../../../assets/svgs/chatsIcon";


const TeamChats = () => {
    return (
        <View style={[styles.container]}>
            <Header header={"Team Chat"}/>
            <SearchBar />
            <View style={{
                flex: 1,
                width: '90%',
                paddingVertical: 20,
                alignItems: 'center',
                justifyContent: 'center',
                opacity: 0.8,
            }}>
                <ChatIcon height={200} width={200}/>
                <Text style={{
                    color: colors.white,
                }}>Find People and Start Chatting !</Text>
                <View
                    style={{
                        width: '80%',
                        marginTop: 30,
                    }}
                >
                    <PrimaryButton text={"Add Contacts"}/>
                </View>
            </View>
        </View>
    );
}

export default TeamChats;