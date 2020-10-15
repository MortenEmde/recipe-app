import React from 'react';
import { Text, View, Image, ScrollView, TouchableHighlight } from 'react-native';
import styles from './styles';
import { categories } from '../../db/MockData';
import { getRecipies } from '../../db/MockAPI';

export default function CategoriesScreen({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {categories.map(category =>
        <TouchableHighlight 
          key={category.id} 
          onPress={() => {
            const recipes = getRecipies(category.id)
            const categoryName = category.name
            navigation.navigate('RecipesList', { navigation, recipes, categoryName })
          }}
        >
          <View style={styles.card}>  
            <Image style={styles.image} source={{ uri: category.photoUrl }} />
            <Text style={styles.text}>{category.name}</Text>
          </View>
        </TouchableHighlight>
      )}
    </ScrollView>
  );
}
