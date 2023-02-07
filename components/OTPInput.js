import { View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import colors from '../globals/colors';
import { useRef } from 'react';

const OTPInput = ({ otp, setOTP }) => {

    const input0 = useRef(null);
    const input1 = useRef(null);
    const input2 = useRef(null);
    const input3 = useRef(null);
    const input4 = useRef(null);
    const input5 = useRef(null);

    return (
        <View
            style={[{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                marginTop: 80,
            }]}
        >
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TextInput ref={input0} style={styles.textInput} autoFocus={true} 
                    value={otp[0]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 0: ''});
                            return;
                        }
                        setOTP({...otp, 0: e})
                        input1.current.focus()
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
                <TextInput ref={input1} style={styles.textInput}
                    value={otp[1]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 1: ''});
                            return;
                        }
                        setOTP({...otp, 1: e})
                        input2.current.focus()
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
                <TextInput ref={input2} style={styles.textInput}
                    value={otp[2]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 2: ''});
                            return;
                        }
                        setOTP({...otp, 2: e})
                        input3.current.focus()
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
            </View>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}
            >
                <TextInput ref={input3} style={styles.textInput}
                    value={otp[3]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 3: ''});
                            return;
                        }
                        setOTP({...otp, 3: e})
                        input4.current.focus()
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
                <TextInput ref={input4} style={styles.textInput}
                    value={otp[4]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 4: ''});
                            return;
                        }
                        setOTP({...otp, 4: e})
                        input5.current.focus()
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
                <TextInput ref={input5} style={styles.textInput}
                    value={otp[5]}
                    onChangeText={(e) => {
                        if(e.length === 0) {
                            setOTP({...otp, 5: ''});
                            return;
                        }
                        setOTP({...otp, 5: e})
                    }}
                    cursorColor={colors.blue}
                    maxLength={1}
                    keyboardType={'numeric'}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    textInput: {
        width: 40,
        borderBottomWidth: 3,
        borderBottomColor: colors.white,
        marginHorizontal: 5,
        padding: 5,
        color: colors.white,
        fontSize: 20,
        textAlign: 'center',
    }
});

export default OTPInput;