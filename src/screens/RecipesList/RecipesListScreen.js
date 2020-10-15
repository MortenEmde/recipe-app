import React from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './styles';

export default function RecipesListScreen({ route, navigation }) {
  const { recipes, categoryName } = route.params;
  navigation.setOptions({ title: categoryName })
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {recipes.map(recipe =>
        <TouchableHighlight key={recipe.recipeId} onPress={() => navigation.navigate('Recipe', { recipe })}>
          <View style={styles.card}>  
            <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
            <Text style={styles.text}>{recipe.title}</Text>
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
}
