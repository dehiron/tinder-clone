import React from 'react';
import { Text, View } from 'react-native';
import tailwind from 'tailwind-rn';

export default function App() {
  return (
    <View style={tailwind("flex-1 justify-center items-center bg-black")}>
      <Text style={tailwind("text-white")}>Hello World</Text>
    </View>
  );
}
