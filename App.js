// Screens
import { OneTimer, Signup } from './screens';

// Fonts
import { useFonts } from 'expo-font';

// Creating Navigation
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const App = () => {

  const [fontsLoaded] = useFonts({
    'PoppinsBold': require('./assets/fonts/Poppins/Poppins-Bold.ttf'),
    'PoppinsMedium': require('./assets/fonts/Poppins/Poppins-Medium.ttf'),
    'PoppinsRegular': require('./assets/fonts/Poppins/Poppins-Regular.ttf'),
    'PoppinsSemiBold': require('./assets/fonts/Poppins/Poppins-SemiBold.ttf'),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,  // Hide header
        }}
      >
        <Stack.Screen name="oneTimer" component={OneTimer} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="signin" component={OneTimer} />
        <Stack.Screen name="joinMeeting" component={OneTimer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;