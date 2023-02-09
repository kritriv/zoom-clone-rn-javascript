// Description: This file contains the code for the bottom navigation bar
// Path: screens\ButtomNavigationsScreens\index.js

// RN Components
import { View, Text, TouchableOpacity } from "react-native";

// Styles
import colors from "../../globals/colors";

// Icons
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


// Navigations
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function CustomizedTabBar({ state, descriptors, navigation }) {
        return (
            <View style={{ 
                    flexDirection: 'row',
                    backgroundColor: '#20262E' || colors.black,
                    elevation: 0,
                    shadowOpacity: 0,
                    height: 70,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    paddingHorizontal: 10,
                    paddingVertical: 5,
            }}>
                    {state.routes.map((route, index) => {
                    const { options } = descriptors[route.key];
                    const label =
                        options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                        ? options.title
                        : route.name;
            
                    const isFocused = state.index === index;
            
                    const onPress = () => {
                        const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                        });
            
                        if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                        }
                    };
            
                    const onLongPress = () => {
                        navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                        });
                    };

                    const Icon = () => {
                        if (label === 'Meetings') {
                            return <FontAwesome name="video-camera" size={25} color={colors.white} />;
                        } else if (label === 'Team Chat') {
                            return <Entypo name="chat" size={25} color={colors.white} />;
                        } else if (label === 'Contacts') {
                            return <MaterialCommunityIcons name="contacts" size={25} color={colors.white} />;
                        } else if (label === 'More') {
                            return <Entypo name="dots-three-horizontal" size={25} color={colors.white} />;
                        }
                    }
            
                    return (
                        <TouchableOpacity
                            accessibilityRole="button"
                            accessibilityState={isFocused ? { selected: true } : {}}
                            accessibilityLabel={options.tabBarAccessibilityLabel}
                            testID={options.tabBarTestID}
                            onPress={onPress}
                            onLongPress={onLongPress}
                            style={{ 
                                width: '25%',
                                alignItems: 'center',
                                justifyContent: 'center',
                                height: '100%', 
                            }}
                            key={index}
                        >
                            <Icon />
                            <Text style={{ color: colors.white, fontFamily: 'PoppinsRegular', marginTop: 5, fontSize: 12 }}>
                                {label}
                            </Text>
                        </TouchableOpacity>
                    );
                    })}
            </View>
        );
  }

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,

            }}
            tabBar={props => <CustomizedTabBar {...props} />}
        >
            <Tab.Screen key={1} name="Meetings" component={() => <Text>METTING</Text>} />
            <Tab.Screen key={2} name="Team Chat" component={() => <Text>CHAT</Text>} />
            <Tab.Screen key={3} name="Contacts" component={() => <Text>CONTACTS</Text>} />
            <Tab.Screen key={4} name="More" component={() => <Text>MORE</Text>} />
        </Tab.Navigator>
    );
}

const MainLoggedInScreen = () => {
    return <Tabs />;
};

export default MainLoggedInScreen;