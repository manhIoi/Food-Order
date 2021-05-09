import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  profileContainer: {
    flex: 1,
  },
  profileHeader: {
    flex: 1,
    backgroundColor: rootColor.primaryColor,
  },
  headerNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  headerNameText: {
    color: rootColor.whiteColor,
    fontSize: 30,
    fontWeight: 'bold',
  },
  profileBody: {
    flex: 4,
  },
  bodyNavigateBtn: {
    marginTop: 50,
    alignItems: 'center',
  },
  bodyContainer: {
    marginTop: 10,
  },
  bodySelection: {
    backgroundColor: rootColor.whiteColor,
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: rootColor.smokeColor,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
