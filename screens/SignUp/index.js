// Screens
import DOBScreen from './dobScreen';
import EmailScreen from './emailScreen';
import OTPScreen from './otpScreen';

// Stack Navigation
import {  createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

// RN Components
import { useState } from 'react';


const Signup = ({ navigation }) => {

    const [email, setEmail] = useState('');

    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,  // Hide header
            }}
        >
            <Stack.Screen name="dobScreen" component={DOBScreen} />
            <Stack.Screen name="emailScreen">
                {props => <EmailScreen {...props} setEmail={setEmail} email={email}/>}
            </Stack.Screen>
            <Stack.Screen name="otpscreen">
                {props => <OTPScreen {...props} email={email}/>}
            </Stack.Screen>
        </Stack.Navigator>
    );
}

export default Signup;