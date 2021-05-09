import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  helpHeaderContainer: {
    padding: 10,
    backgroundColor: rootColor.whiteColor,
    elevation: 6,
  },
  helpHeaderTitle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: rootColor.smokeColor,
  },
  helpHeaderTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  helpHeaderContent: {
    paddingVertical: 10,
  },
  helpHeaderContentText: {
    fontSize: 15,
    lineHeight: 25,
  },
});

export default styles;
