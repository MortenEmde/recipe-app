import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import IngredientsButton from '../../components/IngredientsButton';
import styles from './styles';

export default function RecipeScreen({ route, navigation }) {
  const { recipe } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
      <Text style={styles.title}>{recipe.title}</Text>
      <View style={styles.timeContainer}>
        <Image style={styles.timeIcon} source={require('../../../assets/images/clock.png')} />
        <Text style={styles.time}>{recipe.time} Minutes</Text>
      </View>
      <View style={styles.ingredientContainer}>
        <IngredientsButton onPress={() => navigation.navigate('Home')} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.description}>{recipe.description}</Text>
      </View>
    </ScrollView>
  );
}
