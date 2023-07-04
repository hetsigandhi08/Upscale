import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import BottomTabScreen from './screens/BottomTabScreen';
import LoginScreen from './screens/LoginScreen'
import HomeScreen from './screens/HomeScreen';
import OnBoardingScreen1 from './screens/OnBoardingScreen1';
import OnBoardingScreen2 from './screens/OnBoardingScreen2';
import OnBoardingScreen3 from './screens/OnBoardingScreen3';
import RoadMapScreen from './screens/RoadMapScreen';
import CourseDetailsScreen from './screens/CourseDetailsScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GetStartedScreen1 from './screens/GetStartedScreen1';
import GetStartedScreen2 from './screens/GetStartedScreen2';
import GetStartedScreen3 from './screens/GetStartedScreen3';
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
      <Stack.Navigator initialRouteName="GetStarted1">
      <Stack.Screen name = "GetStarted1" options = {{headerShown: false}} component = {GetStartedScreen1} />
      <Stack.Screen name = "GetStarted2" options = {{headerShown: false}} component = {GetStartedScreen2} />
      <Stack.Screen name = "GetStarted3" options = {{headerShown: false}} components = {GetStartedScreen3} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="Tab" options={{headerShown: false}} component={BottomTabScreen} />
      <Stack.Screen  name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="RoadMap" options={{headerShown: false}} component={RoadMapScreen} />
      <Stack.Screen  name="CourseDetails" options={{headerShown: false}} component={CourseDetailsScreen} />
      <Stack.Screen  name="OnBoardingScreen1" options={{headerShown: false}} component={OnBoardingScreen1} />
      <Stack.Screen  name="OnBoardingScreen2" options={{headerShown: false}} component={OnBoardingScreen2} />
      <Stack.Screen  name="OnBoardingScreen3" options={{headerShown: false}} component={OnBoardingScreen3} />
      </Stack.Navigator>
      <StatusBar />
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
