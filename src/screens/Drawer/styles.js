import { StyleSheet } from 'react-native'; 

const styles = StyleSheet.create({
  content: {
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    alignItems: 'flex-start',
  },
  btnContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  btnIcon: {
    height: 25,
    width: 25,
    marginTop: 2,
  },
  btnText: {
    fontSize: 16,
    marginLeft: 5,
    marginTop: 4,
  },
});

export default styles;
