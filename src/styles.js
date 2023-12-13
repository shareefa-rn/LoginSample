import {StyleSheet} from 'react-native';
import Colors from './Colors';

export default StyleSheet.create({
  iconSize: {
    fontSize: 30,
  },
  errorStyle: {
    marginHorizontal: 10,
    color: 'red',
  },
  input: {
    height: 40,
    borderColor: '#e0e0e0',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5,
    paddingHorizontal: 10,
  },
  button: {
    padding: 10,
    borderColor: '#bee6fe',
    backgroundColor: '#eaf7fd',
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    alignSelf: 'stretch',
    margin: 10,
    padding: 10,
    alignContent: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fff',
  },

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
    fontSize: 16,
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
  logo: {
    width: 66,
    height: 58,
    borderRadius: 400 / 2,
  },
  textHeadingStyle: {
    marginTop: 30,
    fontSize: 40,
    color: '#0250a3',
    fontWeight: 'bold',
  },
  profileContainer: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {},

  image: {
    width: 110,
    height: 110,
    borderRadius: 55,
    borderColor: Colors.black,
    borderWidth: 3,
  },
});
