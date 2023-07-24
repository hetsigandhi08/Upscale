import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback, useEffect, useState } from 'react';
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
import RecoveryMailScreen from './screens/RecoveryMailScreen';
// import RecoveryCodeScreen from './screens/RecoveryCodeScreen';
import ChangePasswordScreen from './screens/ChangePasswordScreen';
import SearchScreen from './screens/SearchScreen';
import SearchPage from './screens/SearchPage';
import CourseVideoScreen from './screens/CourseVideoScreen';
import AccountInfoScreen from './screens/AccountInfoScreen';
import { Provider } from 'react-redux';
import { store } from './redux/store';
// import * as Keychain from 'react-native-keychain';

const Stack = createNativeStackNavigator();
export default function App () {
  const [intialScreen, setInitialScreen] = useState("GetStarted1");
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
  // var credentials;
  // useEffect(async()=>{
  //   credentials= await Keychain.getGenericPassword();
  // },[])

  // try {
  //   // Retreive the credentials
  //   if (credentials) {
  //     console.log('Credentials successfully loaded for user ' + credentials.username);

  //   } else {
  //     console.log('No credentials stored')
  //   }
  // } catch (error) {
  //   console.log('Keychain couldn\'t be accessed!', error);
  // }
  // await Keychain.resetGenericPassword()
  return (
    <Provider store={store} >
    <NavigationContainer>
      <Stack.Navigator initialRouteName="GetStarted1">
      <Stack.Screen name = "GetStarted1" options = {{headerShown: false}} component = {GetStartedScreen1} />
      <Stack.Screen name = "GetStarted2" options = {{headerShown: false}} component = {GetStartedScreen2} />
      <Stack.Screen name = "GetStarted3" options = {{headerShown: false}} component = {GetStartedScreen3} />
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="Tab" options={{headerShown: false}} component={BottomTabScreen} />
      <Stack.Screen  name="Login" options={{headerShown: false}} component={LoginScreen} />
      <Stack.Screen name="RoadMap" options={{headerShown: false}} component={RoadMapScreen} />
      <Stack.Screen  name="CourseDetails" options={{headerShown: false}} component={CourseDetailsScreen} />
      <Stack.Screen  name="OnBoardingScreen1" options={{headerShown: false}} component={OnBoardingScreen1} />
      <Stack.Screen  name="OnBoardingScreen2" options={{headerShown: false}} component={OnBoardingScreen2} />
      <Stack.Screen  name="OnBoardingScreen3" options={{headerShown: false}} component={OnBoardingScreen3} />
      <Stack.Screen  name="RecoveryMail" options={{headerShown: false}} component={RecoveryMailScreen} />
      {/* <Stack.Screen  name="RecoveryCode" options={{headerShown: false}} component={RecoveryCodeScreen} /> */}
      <Stack.Screen  name="ChangePassword" options={{headerShown: false}} component={ChangePasswordScreen} />
      <Stack.Screen name='CourseVideo' options={{headerShown: false}} component={CourseVideoScreen}/>
      <Stack.Screen  name="SearchScreen" options={{headerShown: false}} component={SearchScreen} />
      <Stack.Screen  name="Searchpage" options={{headerShown: false}} component={SearchPage} />
      <Stack.Screen name='AccountInfo' options={{headerShown: false}} component={AccountInfoScreen} />


      </Stack.Navigator>
      <StatusBar style='dark' />
    </NavigationContainer>
    </Provider>
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
