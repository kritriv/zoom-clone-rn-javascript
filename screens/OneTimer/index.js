// RN Components
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { PrimaryButton, SecondaryButton } from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';

const OneTimer = ({ navigation }) => {


    const gotoSignUpPage = () => navigation.navigate('signup');
    const gotoSignInPage = () => navigation.navigate('signin');
    const gotoJoinMeetingPage = () => navigation.navigate('joinMeeting');

    return (
        <View style={[globalStyles.flex]}>
            <StatusBar 
                barStyle='light-content' 
                backgroundColor={colors.blue} 
            />
            <View style={[styles.container, globalStyles.flex]}>
                <View
                    style={[globalStyles.flex, {
                        position: 'absolute',
                        top: 0,
                        height: '60%',
                    }]}
                >
                    <Text style={[styles.fontZoom]}>Zoom</Text>
                </View>
                <View style={[styles.bottomOptions]}>
                   
                    <View style={{alignItems: 'center'}}>
                            <Text style={{
                                color: colors.white,
                                fontSize: 20,
                                fontFamily: 'PoppinsRegular',
                            }}>Welcome</Text>
                            <Text style={{
                                color: colors.grey,
                                fontSize: 15,
                                fontFamily: 'PoppinsRegular',
                            }}>Get Started with your account</Text>
                    </View>

                    <View style={{ 
                        width: '100%',
                        marginTop: 20,
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        height: 170,
                    }}>
                        <PrimaryButton text={"Join a Meeting"} onClickHandler={gotoJoinMeetingPage}/>
                        <SecondaryButton text={"Sign Up"} onClickHandler={gotoSignUpPage}/>
                        <SecondaryButton text={"Sign In"} onClickHandler={gotoSignInPage}/>
                    </View>

                </View>
            </View>
        </View>
    );
}

export default OneTimer;