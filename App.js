// Screens
import { OneTimer, Signup, SignIn, MainLoggedInScreen } from './screens';

// Loggings Disabling
import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();//Ignore all log notifications

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
        <Stack.Screen name="mainLoginScreen" component={MainLoggedInScreen} />
        <Stack.Screen name="oneTimer" component={OneTimer} />
        <Stack.Screen name="signup" component={Signup} />
        <Stack.Screen name="signin" component={SignIn} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;