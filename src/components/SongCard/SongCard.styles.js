import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    flex: 1, // içinde bulunduğu yerde kaplayabildiği kadar alan kaplar
    padding: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 27,
  },
  info_container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  year: {
    marginLeft: 10,
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
  },
  soldout_container: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
  },
  soldout_title: {
    color: 'red',
    letterSpacing: 2,
  },
  body_container: {
    flexDirection: 'row',
    fontSize: 15,
  },
  album_container: {
    flex: 1,
  },
  album: {
    fontSize: 15,
  },
});

export default styles;
