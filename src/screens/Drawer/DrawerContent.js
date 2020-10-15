import React from 'react';
import { Text, View, Image, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function DrawerContent({ navigation }) {
  return (
    <View style={styles.content}>
      <View style={styles.container}>
        <TouchableHighlight 
          onPress={() => {
            navigation.navigate('Home');
            navigation.closeDrawer();
          }}
        >
          <View style={styles.btnContainer}>
            <Image source={require('../../../assets/images/clock.png')} style={styles.btnIcon} />
            <Text style={styles.btnText}>HOME</Text>
          </View>
        </TouchableHighlight>
        <TouchableHighlight 
          onPress={() => {
            navigation.navigate('Categories');
            navigation.closeDrawer();
          }}
        >
          <View style={styles.btnContainer}>
            <Image source={require('../../../assets/images/clock.png')} style={styles.btnIcon} />
            <Text style={styles.btnText}>CATEGORIES</Text>
          </View>
        </TouchableHighlight>
      </View>
    </View>
  );
}
