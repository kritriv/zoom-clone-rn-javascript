// Screens
import DOBScreen from './dobScreen';
import EmailScreen from './emailScreen';
import OTPScreen from './otpScreen';
import CreateAccountScreen from './createAccountScreen';

// Stack Navigation
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// RN Components
import { useState } from 'react';


const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');
    const [passedOTP, setPassedOTP] = useState('');

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  // Hide header
            }}
        >
            <Stack.Screen name="dobScreen" component={DOBScreen} />
            <Stack.Screen name="emailScreen">
                {props => <EmailScreen {...props} setEmail={setEmail} email={email} setOTP={setPassedOTP}/>}
            </Stack.Screen>
            <Stack.Screen name="otpscreen">
                {props => <OTPScreen {...props} email={email} passedOTP={passedOTP}/>}
            </Stack.Screen>
            <Stack.Screen name="createaccountscreen">
                {props => <CreateAccountScreen {...props} email={email} />}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default Signup;