import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { useState } from "react";

// Styles
import colors from "../../../globals/colors";
import styles from "../styles";
import globalStyles from "../../../globals/globalStyles";


// Components
import Header from "../Header";
import { SearchBar } from "../../../components";
import { MeetingButtons } from "../Meetings"

// Icons
import Entypo from 'react-native-vector-icons/Entypo';

const DropDownButtons = ({text, data, containerStyles, count}) => {
    
    const [showDropDown, setShowDropDown] = useState(false);

    return(
        <View>
            <TouchableOpacity onPress={() => setShowDropDown(!showDropDown)}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingVertical: 15,
                    paddingHorizontal: 20,
                    borderTopWidth: 1,
                    borderColor: colors.lightBlack || colors.white,
                    width: '100%',
                    ...containerStyles,
                }}>
                    <View style={{flexDirection: 'row', opacity: 0.5}}>
                        {
                            showDropDown ?
                            <Entypo name="chevron-thin-down" color={colors.white} size={16}/> :
                            <Entypo name="chevron-thin-right" color={colors.white} size={16}/>
                        }
                        <Text style={{
                            color: colors.white,
                            fontSize: 16,
                            fontFamily: 'PoppinsRegular',
                            marginLeft: 10,
                        }}>{text}</Text>
                    </View>
                    <Text style={{
                        color: colors.white,
                        fontSize: 14,
                        fontFamily: 'PoppinsRegular',
                        opacity: 0.5,
                    }}>{count}</Text>
                </View>
            </TouchableOpacity>
            {
                showDropDown && (
                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                    </View>
                )
            }
        </View>
    );
}

const Contacts = () => {
    return (
        <View style={[styles.container]}>
            <Header header={"Contacts"}/>
            <SearchBar placeholder={"Search Contacts"} />
            <ScrollView
                style={{
                    marginTop: 20,
                    width: '100%',
                    flex: 1,
                    borderTopWidth: 0.5,
                    borderTopColor: colors.white,
                }}
                showsVerticalScrollIndicator={false}
                showsHorizontalScrollIndicator={false}
            >
                <Text
                    style={{
                        color: colors.white,
                        fontSize: 24,
                        fontFamily: 'PoppinsMedium',
                        padding: 20
                    }}
                >My Contacts</Text>

                <DropDownButtons text={"Starred"}  count={0}/>
                <DropDownButtons text={"Phone Contacts"}  count={256}/>
                <DropDownButtons text={"External Contacts"} containerStyles={{
                    borderBottomWidth: 1,
                }} count={0}/>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        paddingHorizontal: 20,
                        paddingVertical: 15,
                        width: '100%',
                    }}
                >
                    <View style={[{
                        width: 50,
                    }]}>
                        <MeetingButtons icon='person' hideLabel containerSize={50}/>
                    </View>
                    <Text style={{color: colors.blue, marginLeft: 10, fontSize: 16}}>Invite People to Zoom</Text>
                </View>
            </ScrollView>
        </View>
    );
}

export default Contacts;