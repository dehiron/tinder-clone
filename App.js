import React from 'react';
import StackNavigator from './StackNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './hooks/useAuth';
import { LogBox } from "react-native";
LogBox.ignoreAllLogs();
// import { Button, Text, View } from 'react-native';
// import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider >
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
