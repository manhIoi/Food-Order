import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  formOrderContainer: {
    paddingBottom: 10,
  },
  formOrderHeader: {
    padding: 14,
    backgroundColor: rootColor.whiteColor,
  },
  formOrderHeaderTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 4,
  },
  formOrderTextStrong: {
    fontSize: 20,
    fontWeight: '700',
    flex: 1,
    maxWidth: '75%',
  },
  formOrderTextNormal: {
    fontSize: 15,
  },
  formOrderInput: {
    color: rootColor.primaryColor,
    borderBottomWidth: 1,
    borderColor: rootColor.primaryColor,
  },

  formOrderSelection: {},
  formOrderSelectionHeader: {
    padding: 14,
    backgroundColor: rootColor.smokeColor,
  },
  formOrderOption: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: rootColor.smokeColor,
    backgroundColor: rootColor.whiteColor,
    paddingRight: 20,
  },
});

export default styles;
