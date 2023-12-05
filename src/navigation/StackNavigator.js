import React, {Component, useState} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
// Library ======================================================================================
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

// Screens ======================================================================================
import SplashScreen from '../screens/SplashScreen'
import ListScreen from '../screens/ListScreen'
import LoginScreen from '../screens/LoginScreen'



const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName={"SplashScreen"}
      screenOptions={{headerShown: false}}>
        
      <Stack.Screen
        options={{headerShown: false}}
        name={'SplashScreen'}
        component={SplashScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'LoginScreen'}
        component={LoginScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name={'ListScreen'}
        component={ListScreen}
      />

    </Stack.Navigator>
  );
};

export default StackNavigator;
