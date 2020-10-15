import React from 'react';
import { Text, View, ScrollView, TouchableHighlight } from 'react-native';
import MarkIngredientButton from '../../components/MarkIngredientButton/MarkIngredientButton';
import styles from './styles';

export default function IngredientScreen({ route }) {
  const { recipe } = route.params;
  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      {recipe.ingredients.map(ingredient => 
        <MarkIngredientButton key={ingredient[0]} ingredient={ingredient} />
      )}
    </ScrollView>
  );
}
