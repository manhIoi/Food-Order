import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  authContainer: {
    flex: 1,
    backgroundColor: rootColor.primaryColor,
  },
  authHeader: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  authHeaderText: {
    color: rootColor.whiteColor,
    fontSize: 25,
    fontWeight: '700',
    padding: 10,
  },
  authForm: {
    flex: 2,
    backgroundColor: rootColor.whiteColor,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  authFormHeader: {
    textTransform: 'uppercase',
    color: rootColor.primaryColor,
    fontSize: 30,
    fontWeight: '700',
    marginBottom: 20,
  },
  authFormWrapper: {
    marginBottom: 20,
  },

  authFormInput: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 300,
    borderWidth: 1,
    borderColor: rootColor.primaryColor,
    paddingHorizontal: 8,
    borderRadius: 8,
  },
  authFormAction: {
    width: '100%',
    alignItems: 'center',
  },
  authIcon: {
    fontSize: 24,
    color: rootColor.grayPrimaryColor,
  },
});

export default styles;
