import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: '#ffffff',
  },
  card: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#bdc3c7',
    borderWidth: 1,
    borderRadius: 20,
  },
  image: {
    width: '100%',
    height: 175,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
  },
  text: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#333333',
    marginTop: 8
  },
});

export default styles;
