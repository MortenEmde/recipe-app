import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import styles from './styles';
import { recipes } from '../../db/MockData';

export default function RecipeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={{ uri: recipes[0].photoUrl }} />
      <View>
        <Text style={styles.title}>{recipes[0].title}</Text>
        <Text style={styles.time}>{recipes[0].time} Minutes</Text>
        <View style={styles.ingredientContainer}>
          {recipes[0].ingredients.map(ingredient => 
            <Text style={styles.ingredient} key={ingredient[0]}>{ingredient[0]}: {ingredient[1]}</Text>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{recipes[0].description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
