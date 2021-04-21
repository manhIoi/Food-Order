import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  foodsContainer: {
    backgroundColor: rootColor.whiteColor,
    padding: 10,
    // marginVertical: 10,
  },
  foodsHeader: {
    marginBottom: 8,
  },
  foodsHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: rootColor.textBlack,
  },
});

export default styles;
