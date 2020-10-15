import React from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './styles';
import { recipes } from '../../db/MockData';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {recipes.map(recipe =>
        <TouchableHighlight key={recipe.recipeId} onPress={() => navigation.navigate('Recipe', { recipe })}>
          <View style={styles.card}>  
            <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
            <Text>{recipe.title}</Text>
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
}
