import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 20,
  },
  card: {
    padding: 13,
    marginBottom: 20,
    width: 160,
    borderWidth: 1,
    borderRadius: 20,
    borderColor: '#bdc3c7', 
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 10,
  },
});

export default styles;
