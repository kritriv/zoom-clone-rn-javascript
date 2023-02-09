import { View, Text, TouchableOpacity } from "react-native";

// Styles
import colors from "../../../globals/colors";
import globalStyles from "../../../globals/globalStyles";
import styles from "../styles";

// Icons
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Foundation from 'react-native-vector-icons/Foundation';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Components
import Header from "../Header";


export const MeetingButtons = ({icon, color, iconSize, iconColor, containerSize, hideLabel}) => {

    const ICON_SIZE = iconSize || 30;
    const ICON_COLOR = iconColor || colors.white;

    const Icon = () => {
        if(icon === 'video-camera'){
            return <FontAwesome name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        }
        else if(icon === 'plussquare'){
            return <AntDesign name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        }
        else if(icon === 'calendar'){
            return <Foundation name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        }
        else if(icon === 'share'){
            return <Feather name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        }
        else if(icon === 'person'){
            return <Ionicons name={icon} size={ICON_SIZE} color={ICON_COLOR} />
        }
        return null;
    }

    const message = icon === 'video-camera' ? 'New Meeting' :
                    icon === 'plussquare' ? 'Join' :
                    icon === 'calendar' ? 'Schedule' :
                    icon === 'share' ? 'Share' :
                    icon === 'person' ? 'Invite' : null;

    return(
        <TouchableOpacity style={{
            alignItems: 'center',
            justifyContent: 'center',
        }}>
            <View
                style={{
                    width: containerSize || 60,
                    height: containerSize || 60,
                    backgroundColor: color ? color : colors.blue,
                    borderRadius: 15,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                <Icon  />
            </View>
            {
                hideLabel ? null : <Text style={{fontSize: 12, color: colors.white, opacity: 0.5, marginTop: 5}}>{message}</Text>
            }
        </TouchableOpacity>
    );
};

const Meetings = () => {

    return (
        <View style={[styles.container]}>
            <Header header={"Meetings"}/>
            <View
                style={[{
                    width: '100%',
                    marginTop: 20,
                    flexDirection: 'row',
                    justifyContent: 'space-evenly',
                }]}
            >
                <MeetingButtons icon='video-camera' color={colors.orange} />
                <MeetingButtons icon='plussquare' />
                <MeetingButtons icon='calendar' />
                <MeetingButtons icon='share' iconSize={25}/>
            </View>
            <View style={styles.addCalendar}>
                <Text style={{opacity: 0.8, color: colors.white}}>Add a calendar</Text>
            </View>
        </View>
    );
}

export default Meetings;