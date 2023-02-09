// RN Components
import { Text, View, StatusBar } from 'react-native';
import { useState } from 'react';

// Custom Components
import { BackNavigator, OTPInput, Timer } from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';

// Icons
import Icon from 'react-native-vector-icons/AntDesign';


const EmailScreen = ({ navigation, email, passedOTP }) => {

    const [otp, setOTP] = useState({
        0: '',
        1: '',
        2: '',
        3: '',
        4: '',
        5: '',
    });

    const [error, setError] = useState('');

    const generateOtp = (otpMap) => {
        return otpMap[0] + otpMap[1] + otpMap[2] + otpMap[3] + otpMap[4] + otpMap[5];
    };
    const validateOTP = () => {
        const otpString = generateOtp(otp);
        if (otpString === passedOTP) {
            navigation.navigate('createaccountscreen');
        } else {
            setError('Please enter a valid verification code');
        }
    };


    return (
        <View style={[globalStyles.flex]}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.black} 
            />
            <View style={[styles.container, globalStyles.flex, { justifyContent: 'flex-start' }]}>
                <BackNavigator navigation={navigation} text={"Verification"} />
                <View
                    style={{
                        width: '100%',
                        paddingHorizontal: 20,
                        marginTop: 20,
                        textAlign: 'center',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        opacity: 0.5,
                    }}
                >
                    <Text style={[styles.headerText]}>Check your email for a code</Text>
                    <Text style={[styles.buttonText]}>Please enter the verification code sent to your email address {email}</Text>
                
                    <OTPInput otp={otp} setOTP={setOTP} validateOTP={validateOTP}/>

                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'center',
                                width: '100%',
                                height: 50,
                                marginTop: 20,
                            }}
                        >
                            {
                                error !== '' &&
                                <>
                                    <Icon name="warning" size={15} color={'red'} style={{marginRight: 10}}/>
                                    <Text style={{color: 'red'}}>{error}</Text>
                                </>
                            }
                        </View>
                        
                        <Timer timeInSeconds={10} />

                        <Text style={{
                            marginTop: 20,
                            color: colors.white,
                        }}>Did not get the code? <Text style={{ color: colors.blue }}>Resend Code</Text></Text>
                </View>
            </View>
        </View>
    );
}

export default EmailScreen;