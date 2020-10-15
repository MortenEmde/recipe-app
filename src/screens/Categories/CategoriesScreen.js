import React from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Text>Test category screen</Text>
    </ScrollView>
  );
}
