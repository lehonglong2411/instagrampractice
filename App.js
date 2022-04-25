import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import LandingScreen from './components/auth/Landing';

import * as firebase from 'firebase'

// Initialize Firebase
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjCVKQ2G9M5InUfGCw8pY1DYajV7BVkNQ",
  authDomain: "instagram-practice-3732e.firebaseapp.com",
  projectId: "instagram-practice-3732e",
  storageBucket: "instagram-practice-3732e.appspot.com",
  messagingSenderId: "449103701425",
  appId: "1:449103701425:web:0932c8cfa1bda6ced54990",
  measurementId: "G-RZSQM9R6YF"
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig)
}

const Stack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = "Landing">
        <Stack.Screen name = "Landing" component = {LandingScreen} options = {{ headerShown : false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
 