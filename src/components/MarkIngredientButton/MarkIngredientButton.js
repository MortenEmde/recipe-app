import React, { useState } from 'react';
import { TouchableHighlight, Text, View } from 'react-native';
import styles from './styles';

export default function MarkIngredientButton({ ingredient }) {
  let [buttonPressed, setButtonPressed] = useState(false);
  
  return (
    <TouchableHighlight onPress={() => {
      setButtonPressed(!buttonPressed)
    }}>
      <View style={styles.ingredientContainer}>
        <Text style={buttonPressed ? styles.ingredientNameDone : styles.ingredientName}>{ingredient[0]}:</Text>
        <Text style={buttonPressed ? styles.ingredientAmountDone : styles.ingredientAmount}>{ingredient[1]}</Text>
      </View>
    </TouchableHighlight>
  );
}
