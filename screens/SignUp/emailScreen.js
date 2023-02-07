// RN Components
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { PrimaryButton, SecondaryButton, IconButton, BackNavigator, RNTextInput } from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';

// Functions
import validator from 'validator';


const EmailScreen = ({ navigation, email, setEmail }) => {

    return (
        <View style={[globalStyles.flex]}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.black} 
            />
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

                    <View
                        style={{
                            width: '100%',
                        }}
                    >
                        {
                            validator.isEmail(email) ? 
                            <PrimaryButton text={"Continue"} onClickHandler={() => navigation.navigate('otpscreen')}/> :
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
                        <IconButton text={"Continue with Google"} icon={"google"} />
                        <IconButton text={"Continue with Apple"} icon={"apple"} />
                        <IconButton text={"Continue with Facebook"} icon={"facebook"} />
                    </View>
                    
                </View>
            </View>
        </View>
    );
}

export default EmailScreen;