import {StyleSheet} from 'react-native';
import rootColor from '../../../constants/color';

const styles = StyleSheet.create({
  restaurantContainer: {
    width: '100%',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: rootColor.smokeColor,
    paddingVertical: 16,
    borderBottomWidth: 2,
    borderColor: rootColor.smokeColor,
    backgroundColor: '#fff',
  },
  lastRestaurant: {
    borderBottomWidth: 0,
  },
  restaurantImageWrapper: {
    flex: 1,
    aspectRatio: 1,
  },
  restaurantImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  restaurantDesciption: {
    flex: 2,
    aspectRatio: 2,
    justifyContent: 'space-between',
    marginLeft: 12,
  },
  restaurantDesciptionStrong: {
    fontSize: 16,
    fontWeight: '700',
  },
  restaurantDesciptionNormal: {
    color: rootColor.grayPrimaryColor,
  },
  iconColor: {
    color: rootColor.primaryColor,
  },
});

export default styles;
