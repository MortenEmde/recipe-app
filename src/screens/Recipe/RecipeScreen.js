import React from 'react';
import { Text, View, Image, ScrollView, FlatList } from 'react-native';
import styles from './styles';

export default function RecipeScreen({ route, navigation }) {
  const { recipe } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
      <View>
        <Text style={styles.title}>{recipe.title}</Text>
        <Text style={styles.time}>{recipe.time} Minutes</Text>
        <View style={styles.ingredientContainer}>
          {recipe.ingredients.map(ingredient => 
            <Text style={styles.ingredient} key={ingredient[0]}>{ingredient[0]}: {ingredient[1]}</Text>
          )}
        </View>
        <View style={styles.descriptionContainer}>
          <Text style={styles.description}>{recipe.description}</Text>
        </View>
      </View>
    </ScrollView>
  );
}
