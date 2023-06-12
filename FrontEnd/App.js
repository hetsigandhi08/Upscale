import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useCallback } from 'react';
import { useFonts } from 'expo-font';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack';


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
      <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen  name="Login" options={{headerShown: false}} component={LoginScreen} />
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
