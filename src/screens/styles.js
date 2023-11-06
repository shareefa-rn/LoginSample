import {StyleSheet, TextInput} from 'react-native';

export default StyleSheet.create({
  touchableText: {
    height: 40,
    marginHorizontal: 10,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textview: {
    height: 40,
    flex: 4,
    marginHorizontal: 10,
    backgroundColor: 'lightgreen',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'left',
  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#015169',
    paddingVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInuput: {
    alignItems: 'center',
    textAlign: 'left',
    justifyContent: 'center',
    backgroundColor: 'pink',
    height: 40,
    width: 100,
    margin: 10,
    padding: 5,
    flex: 1,
  },
  view: {
    marginHorizontal: 10,
    height: 40,
    backgroundColor: 'lightgreen',
    marginVertical: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
});
