import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  promosContainer: {
    backgroundColor: rootColor.whiteColor,
    padding: 10,
    marginVertical: 10,
  },
  promosHeader: {
    marginBottom: 4,
  },
  prmosHeaderStrong: {
    fontSize: 20,
    fontWeight: '700',
  },
  prmosHeaderNormal: {
    fontSize: 13,
    color: rootColor.grayPrimaryColor,
  },
  promoContainer: {
    marginVertical: 6,
    width: 150,
    marginRight: 16,
  },
  promoImage: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 8,
  },
  promoFooter: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    alignItems: 'flex-start',
  },
  promoFooterText: {
    fontSize: 16,
    fontWeight: '700',
  },
  promoFooterIcon: {
    color: rootColor.primaryColor,
  },
});

export default styles;
