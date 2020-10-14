import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  title: {
    fontSize: 28,
    margin: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ingredientContainer: {
    margin: 30,
    marginBottom: 0,
  },
  ingredient: {
    fontSize: 14,
  },
  descriptionContainer: {
    margin: 30,
  },
  description: {
    fontSize: 14,
  },
  image: {
    width: '100%',
    height: 250,
  },
});

export default styles;
