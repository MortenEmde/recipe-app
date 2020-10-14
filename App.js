import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/Home/HomeScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>HEADER TEST</Text>
      <HomeScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
