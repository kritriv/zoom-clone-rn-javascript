// RN Components
import { useEffect, useState } from 'react';
import { Text, View, StatusBar } from 'react-native';

// Custom Components
import { PrimaryButton, SecondaryButton, BackNavigator, RNTextInput } from '../../components/';

// Styles
import styles from './styles';
import colors from '../../globals/colors';
import globalStyles from '../../globals/globalStyles';



const DOBScreen = ({ navigation }) => {

    const [ birthYear, setBirthYear ] = useState('');
    const [ validator, setValidator ] = useState(false);

    useEffect(() => {
        if(birthYear.length === 4) {
            const year = parseInt(birthYear);
            if(year >= 1900 && year <= 2021) {
                setValidator(true);
            } else {
                setValidator(false);
            }
        } else {
            setValidator(false);
        }
    }, [birthYear]);

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
                    ]}>VERIFY YOUR AGE</Text>
                    
                    <RNTextInput
                        placeholder={"Birth Year"}
                        type={"numeric"}
                        value={birthYear}
                        onChangeText={setBirthYear}
                        maxLength={4}
                    />

                    <Text style={[
                        globalStyles.colorWhite,
                        {
                            opacity: 0.5,
                            fontFamily: 'PoppinsRegular',
                        }
                    ]}>Please confirm your birth year. This data will not be stored.</Text>

                    <View
                        style={{
                            width: '100%',
                            marginTop: 40,
                        }}
                    >
                        {
                            validator ? 
                            <PrimaryButton text={"Continue"} onClickHandler={() => navigation.navigate('emailScreen')} /> :
                            <SecondaryButton text={"Continue"} onClickHandler={() => {}}/>
                        }
                    </View>
                </View>
            </View>
        </View>
    );
}

export default DOBScreen;