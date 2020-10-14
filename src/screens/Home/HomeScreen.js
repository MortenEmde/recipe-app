import React from 'react';
import { Text, View, Image, ScrollView, Button, TouchableHighlight } from 'react-native';
import styles from './styles';
import { recipes } from '../../db/MockData';

export default function HomeScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {recipes.map(recipe =>
        <TouchableHighlight onPress={() => navigation.navigate('Recipe', { recipe })}>
          <View style={styles.card} key={recipe.recipeId} >  
            <Image style={styles.image} source={{ uri: recipe.photoUrl }} />
            <Text >{recipe.title}</Text>
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
}
