import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  contentContainer: {
    height: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  card: {
    padding: 13,
    marginBottom: 20,
    width: 160,
    height: 200,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#bdc3c7', 
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
  text: {
    fontWeight: 'bold',
  }
});

export default styles;
