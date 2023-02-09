// RN Components
import React, { useState } from 'react';
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { 
    PrimaryButton, 
    SecondaryButton, 
    IconButton, 
    BackNavigator, 
    RNTextInput,
    Loader
} from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';

// Functions
import validator from 'validator';

// Constants
import { SERVER_BASE_URL, SERVER_TEST_URL } from '../../globals/constants';

// AUTHENTICATION
// import * as Google from 'expo-auth-session/providers/google';
// import * as WebBrowser from 'expo-web-browser';
// import * as AuthSession from 'expo-auth-session';

// android : 532784606135-2a094u50p8ioi4ch41t3q83mlth6jtnk.apps.googleusercontent.com
// ios : 532784606135-6t00ck8rtefmud6ilhegnaakbs6c9lcc.apps.googleusercontent.com
// web : 532784606135-t5ihm6g7cfp753g3f4e2b90qhpl3oq5f.apps.googleusercontent.com

// WebBrowser.maybeCompleteAuthSession();
// const redirectUri = AuthSession.makeRedirectUri({
//     useProxy: true,
// });

const EmailScreen = ({ navigation, email, setEmail, setOTP }) => {

    // const [accessToken, setAccessToken] = useState(null);
    // const [userInfo, setUserInfo] = useState(null);
    // const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    //     clientId: '532784606135-t5ihm6g7cfp753g3f4e2b90qhpl3oq5f.apps.googleusercontent.com',
    //     iosClientId: '532784606135-6t00ck8rtefmud6ilhegnaakbs6c9lcc.apps.googleusercontent.com',
    //     androidClientId: '532784606135-2a094u50p8ioi4ch41t3q83mlth6jtnk.apps.googleusercontent.com',
    // });

    // useEffect(() => {
    //     if (response?.type === 'success') {
    //         setAccessToken(response.authentication.accessToken);
    //         accessToken && fetchUserInfo();
    //     }
    // }, [response, accessToken]);

    // function fetchUserInfo() {
    //     fetch('https://www.googleapis.com/userinfo/v2/me', {
    //         headers: { Authorization: `Bearer ${accessToken}` },
    //     })
    //         .then(response => response.json())
    //         .then(userInfo => setUserInfo(userInfo))
    //         .catch(error => console.log(error));
    // }

    const TEST_MODE = false; 
    /*  
        TEST_MODE = true : use local server
        TEST_MODE = false : use deployed server    
    */

    const [loading, setLoading] = useState(false);
    const [emailError, setEmailError] = useState(null);

    const sendOTP = async () => {
        try{
            setLoading(true);
            const response = await fetch(`${TEST_MODE ? SERVER_TEST_URL : SERVER_BASE_URL}/api/getOTP`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email }),
            });
            if(response){
                const data = await response.json();
                if(data.status === 'Success'){
                    console.log(data.data);
                    setLoading(false);
                    setOTP(data.data);
                    navigation.navigate('otpscreen');
                }
                else if(data.status === 'Already Registered'){
                    setLoading(false);
                    setEmailError('Email already registered');
                }
                else{
                    setEmailError('Error in sending OTP');
                    setLoading(false);
                }
            }
            else {
                setEmailError('Internal Server has been Occured. Please try again later.');
                setLoading(false);
            }
        }
        catch(err){
            setEmailError('Error. Please try again later.');
            setLoading(false);
        }
    };

    return (
        <View style={[globalStyles.flex]}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.black} 
            />
            {
                loading && <Loader />
            }
            <View style={[styles.container, globalStyles.flex, { justifyContent: 'flex-start' }]}>
                <BackNavigator navigation={navigation} text={"Sign Up"} />
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
                    
                    <RNTextInput
                        placeholder={"Email"}
                        type={"email"}
                        value={email}
                        onChangeText={setEmail}
                    />

                    {
                        emailError && <Text style={{
                            color: 'red',
                            fontFamily: 'PoppinsRegular',
                            marginVertical: 10,
                            textAlign: 'center',
                            opacity: 0.8,
                        }}>{emailError}</Text>
                    }

                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        {
                            validator.isEmail(email) ? 
                            <PrimaryButton text={"Continue"} onClickHandler={sendOTP}/> :
                            <SecondaryButton text={"Continue"} onClickHandler={() => {}}/>
                        }
                    </View>

                    <Text style={[
                        {
                            fontFamily: 'PoppinsRegular',
                            marginTop: 20,
                            color: '#8D8DAA',
                        }
                    ]}>
                        By proceeding, I agree to the <Text style={{
                            color: colors.blue,
                            opacity: 1,
                        }}>Zoom's Privacy Statement</Text> and <Text style={{
                            color: colors.blue,
                            opacity: 1,
                        }}>Terms of Service</Text>.
                    </Text>


                    <Text style={[
                        {
                            marginTop: 20,
                            opacity: 0.5,
                            color: colors.white,
                        }
                    ]}>
                        OR SELECT YOUR SIGN UP METHOD
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

export default EmailScreen;