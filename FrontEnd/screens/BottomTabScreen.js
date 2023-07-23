import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './HomeScreen';
import ProfileScreen from './ProfileScreen';
import SearchScreen from './SearchScreen';
import MyCourseScreen from './MyCourseScreen';
import Ionicons from '@expo/vector-icons/Ionicons';
import SearchPage from './SearchPage';

const Tab = createBottomTabNavigator();
const BottomTabScreen = () => {
  return (
       <Tab.Navigator initialRouteName='Home'
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person-circle' : 'person-circle-outline';
            }else if (route.name === 'Search') {
              iconName = focused ? 'search' : 'search-outline';
            }else if (route.name === 'My Course') {
              iconName = focused ? 'book' : 'book-outline';
            }
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: '#031D44',
          tabBarInactiveTintColor: 'gray',
        })}
       >
        <Tab.Screen name="Home" options={{headerShown: false,}} component={HomeScreen} />
        <Tab.Screen name="Search" options={{headerShown: false}} component={SearchScreen} />
        <Tab.Screen name="My Course" options={{headerShown: false}} component={MyCourseScreen} />
        <Tab.Screen name="Profile" options={{headerShown: false}} component={ProfileScreen} />
      </Tab.Navigator>

  )
}

export default BottomTabScreen

const styles = StyleSheet.create({})