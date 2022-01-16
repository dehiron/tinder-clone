import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { AuthProvider } from './hooks/useAuth';
// import { Button, Text, View } from 'react-native';
// import tailwind from 'tailwind-rn';
import StackNavigator from './StackNavigator';

export default function App() {
  return (
    <NavigationContainer >
      <AuthProvider >
        <StackNavigator />
      </AuthProvider>
    </NavigationContainer>
  );
}
