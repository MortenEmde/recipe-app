import React from 'react';
import { Text, View, Image, ScrollView } from 'react-native';
import styles from './styles';
import { recipes } from '../../db/MockData';

export default function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {recipes.map(recipe => 
        <View style={styles.card} key={recipe.recipeId}>  
          <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
          <Text >{recipe.title}</Text>
        </View>
      )}
    </ScrollView>
  );
}
