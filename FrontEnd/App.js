import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import OnBoardingScreen1 from './screens/OnBoardingScreen1';
import OnBoardingScreen2 from './screens/OnBoardingScreen2';
import OnBoardingScreen3 from './screens/OnBoardingScreen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen1 from './screens/GetStartedScreen1';


const Stack = createNativeStackNavigator();
export default function App() {
  const [fontsLoaded] = useFonts({
    'SourceSans3-SemiBold': require('./assets/fonts/SourceSans3-SemiBold.ttf'),
    'SourceSans3-Regular': require('./assets/fonts/SourceSans3-Regular.ttf'),
    'SourceSans3-Bold': require('./assets/fonts/SourceSans3-Bold.ttf'),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted">
      <Stack.Screen name = "GetStarted" options = {{headerShown: false}} component = {GetStartedScreen1} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen  name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen  name="OnBoardingScreen1" options={{headerShown: false}} component={OnBoardingScreen1} />
      <Stack.Screen  name="OnBoardingScreen2" options={{headerShown: false}} component={OnBoardingScreen2} />
      <Stack.Screen  name="OnBoardingScreen3" options={{headerShown: false}} component={OnBoardingScreen3} />
      </Stack.Navigator>
      <StatusBar style="dark"/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
