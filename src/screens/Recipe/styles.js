import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 28,
    margin: 15,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center'
  },
  timeContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  timeIcon: {
    marginRight: 5,
  },
  time: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  ingredientContainer: {
    alignItems: 'center',
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
