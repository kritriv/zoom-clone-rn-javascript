// RN Components
// import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { 
    PrimaryButton, 
    SecondaryButton, 
    IconButton, 
    BackNavigator, 
    RNTextInput 
} from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';


const SignInScreen = ({ navigation, email, setEmail, password, setPassword }) => {

    return (
        <View style={[globalStyles.flex]}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.black} 
            />
            <View style={[styles.container, globalStyles.flex, { justifyContent: 'flex-start' }]}>
                <BackNavigator navigation={navigation} text={"Sign In"} />
                <View
                    style={[{
                        width: '100%',
                        paddingHorizontal: 20,
                    }]}
                >
                    <Text style={[
                        globalStyles.colorWhite,
                        {
                            opacity: 0.5
                        }
                    ]}>ENTER YOUR EMAIL ADDRESS</Text>
                    
                    <View
                        style={{
                            marginVertical: 10,
                        }}
                    >
                        <RNTextInput
                            placeholder={"Email"}
                            type={"email"}
                            value={email}
                            onChangeText={setEmail}
                            containerStyles={{
                                marginVertical: 0,
                                borderBottomWidth: 0.5,
                            }}
                        />
                        <RNTextInput
                            placeholder={"Password"}
                            type={"email"}
                            value={password}
                            onChangeText={setPassword}
                            containerStyles={{
                                marginVertical: 0,
                                borderBottomWidth: 0.5,
                            }}
                        />
                    </View>

                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        {
                            email && password ? 
                            <PrimaryButton text={"Continue"} /> :
                            <SecondaryButton text={"Continue"} onClickHandler={() => {}}/>
                        }
                    </View>

                    <Text style={[
                        {
                            fontFamily: 'PoppinsRegular',
                            marginTop: 20,
                            color: colors.blue,
                        }
                    ]}>
                        Forgot Password?
                    </Text>


                    <Text style={[
                        {
                            marginTop: 20,
                            opacity: 0.5,
                            color: colors.white,
                        }
                    ]}>
                        OTHER SIGN IN METHODS
                    </Text>

                    <View
                        style={{
                            width: '100%',
                            marginTop: 20,
                            height: 180,
                            justifyContent: 'space-between',
                        }}

                    >
                        <IconButton 
                            text={"Continue with Google"} 
                            icon={"google"} 
                            // onClickHandler={promptAsync} 
                            // disabled={!request} 
                        />
                        <IconButton 
                            text={"Continue with Apple"} 
                            icon={"apple"} 
                        />
                        <IconButton 
                            text={"Continue with Facebook"} 
                            icon={"facebook"} 
                        />
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

export default SignInScreen;