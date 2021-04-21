import {StyleSheet} from 'react-native';
import rootColor from '../../../constants/color';

const styles = StyleSheet.create({
  foodContainer: {
    backgroundColor: rootColor.whiteColor,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: rootColor.smokeColor,
    flexDirection: 'row',
  },
  foodDescription: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    flex: 3,
  },
  lastFood: {
    borderBottomWidth: 0,
  },
  foodName: {},
  foodPrice: {},
  foodText: {
    fontSize: 16,
  },
  foodImageWrapper: {
    flex: 1,
    borderRadius: 8,
  },
  foodImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
});

export default styles;
