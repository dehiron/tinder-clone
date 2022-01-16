import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
// import { Button, Text, View } from 'react-native';
// import tailwind from 'tailwind-rn';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer >
      <StackNavigator />
    </NavigationContainer>
  );
}
