import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  ingredientContainer: {
    alignItems: 'center',
    padding: 7,
    margin: 5,
    width: 250,
    borderWidth: 1,
    borderRadius: 100,
    borderColor: '#2cd18a',
    backgroundColor: '#2cd18a',
  },
  ingredientName: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#fff',
  },
  ingredientNameDone: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
    color: '#000',
    textDecorationLine: 'line-through',
  },
  ingredientAmount: {
    fontSize: 16,
    color: '#fff',
  },
  ingredientAmountDone: {
    fontSize: 16,
    color: '#000',
    textDecorationLine: 'line-through',
  },
});

export default styles;