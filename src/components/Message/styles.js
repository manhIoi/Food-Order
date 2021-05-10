import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  messageCard: {
    backgroundColor: rootColor.whiteColor,
    width: '80%',
    // height: 200,
    marginTop: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    overflow: 'hidden',
  },
  messageCardTitle: {
    backgroundColor: rootColor.primaryColor,
    padding: 8,
  },
  messageCardTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
  messageCardContent: {
    padding: 8,
  },
  messageCardContentText: {
    color: rootColor.textBlack,
    lineHeight: 22,
  },
  messageCardContentTextStrong: {
    color: rootColor.textLightGray,
    lineHeight: 22,
    fontWeight: 'bold',
  },
  messageCardFooter: {
    paddingBottom: 8,
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  messageCardFooterText: {
    color: rootColor.primaryColor,
    fontWeight: 'bold',
  },
  messageCardFooterTextSecondary: {
    color: rootColor.redPrimaryColor,
    fontWeight: 'bold',
  },
});

export default styles;
