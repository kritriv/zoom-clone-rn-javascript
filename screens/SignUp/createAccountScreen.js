// RN Components
import React, { useState, useEffect } from 'react';
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { 
    PrimaryButton, 
    SecondaryButton, 
    Loader, 
    BackNavigator, 
    RNTextInput 
} from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';

// Constants
import { SERVER_BASE_URL, SERVER_TEST_URL, STORAGE_KEY } from '../../globals/constants';
import globalStyles from '../../globals/globalStyles';

// External Libraries
import AsyncStorage from '@react-native-async-storage/async-storage';


const CreateAccountScreen = ({ navigation, email }) => {

    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [password, setPassword] = useState('');

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const TEST_MODE = false; 
    /*  
        TEST_MODE = true : use local server
        TEST_MODE = false : use deployed server    
    */

    const createAccount = async () => {
        try{
            setLoading(true);
            const response = await fetch(`${TEST_MODE ? SERVER_TEST_URL : SERVER_BASE_URL}/api/createAccount`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, fname, lname, password }),
            });
            if(response){
                const data = await response.json();
                console.log(data);
                if(data.status === 'Success'){
                    setLoading(false);
                    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify({ email, password}));
                    alert('Account Created Successfully');
                    navigation.navigate('mainLoginScreen');
                }
                else{
                    setError('Error Occured. Please try again later.');
                    setLoading(false);
                }
            }
            else {
                setError('Internal Server has been Occured. Please try again later.');
                setLoading(false);
            }
        }
        catch(err){
            console.log(err);
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
                <BackNavigator navigation={navigation} text={"Create Account"} />
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
                    ]}>ENTER YOUR NAME AND SET YOUR PASSWORD</Text>
                    
                    <View
                        style={{
                            marginVertical: 10,
                        }}
                    >
                        <RNTextInput
                            placeholder={"First Name"}
                            type={"text"}
                            value={fname}
                            onChangeText={setFname}
                            containerStyles={{
                                marginVertical: 0,
                                borderBottomWidth: 0.5,
                            }}
                        />
                        <RNTextInput
                            placeholder={"Last Name"}
                            type={"text"}
                            value={lname}
                            onChangeText={setLname}
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
                            fname && lname && password ? 
                            <PrimaryButton text={"Continue"} onClickHandler={createAccount} /> :
                            <SecondaryButton text={"Continue"} onClickHandler={() => {}}/>
                        }
                    </View> 
                    {
                        error && <Text style={{ textAlign: 'center', color: 'red', marginVertical: 20 }}>{error}</Text>
                    }                  
                </View>
            </View>
        </View>
    );
}

export default CreateAccountScreen;