// import {} from 'react-native';

import {StyleSheet, Dimensions} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  categogiesContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: 4,
    borderRadius: 10,
    overflow: 'hidden',
    borderStyle: 'dashed',
    borderWidth: 2,
    borderColor: rootColor.grayPrimaryColor,
  },
  categoryWrapper: {
    backgroundColor: rootColor.whiteColor,
    width: '25%',
    minHeight: 100,
    aspectRatio: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryImage: {
    width: 70,
    height: 70,
  },
  categoryName: {
    fontSize: 15,
    fontWeight: '700',
  },
});

export default styles;
