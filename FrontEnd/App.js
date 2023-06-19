import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import BottomTabScreen from './screens/BottomTabScreen';
import LoginScreen from './screens/LoginScreen'
import OnBoardingScreen1 from './screens/OnBoardingScreen1';
import OnBoardingScreen2 from './screens/OnBoardingScreen2';
import OnBoardingScreen3 from './screens/OnBoardingScreen3';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';


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
      <Stack.Navigator initialRouteName="Tab">
      <Stack.Screen name="Tab" options={{headerShown: false}} component={BottomTabScreen} />
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
