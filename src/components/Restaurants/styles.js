import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  restaurantsContainer: {
    backgroundColor: rootColor.whiteColor,
    padding: 10,
    marginVertical: 10,
  },
  restaurantsHeader: {
    marginBottom: 4,
  },
  restaurantsHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: rootColor.textBlack,
  },
});

export default styles;
