import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import Login from "./auth/Login"
import Signup from "./auth/SignUp"
import Home from './home/Home';

import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="LogIn" component={Login} />
            <Stack.Screen name="SignUp" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
    </NavigationContainer>
  )
}

