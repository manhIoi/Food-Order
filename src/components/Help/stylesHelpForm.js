import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  helpFormContainer: {
    backgroundColor: rootColor.whiteColor,
    marginTop: 30,
    elevation: 6,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  helpFormTitle: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: rootColor.smokeColor,
  },

  helpFormTitleText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  helpFormInput: {
    marginTop: 15,
    height: 100,
    textAlignVertical: 'top',
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: rootColor.smokeColor,
    borderBottomColor: rootColor.primaryColor,
    borderBottomWidth: 1,
    marginBottom: 20,
  },
});
export default styles;
