import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  messageCard: {
    backgroundColor: rootColor.whiteColor,
    width: '80%',
    height: 200,
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
  },
  messageCardFooter: {
    padding: 8,
  },
  messageCardFooterText: {
    color: rootColor.primaryColor,
    fontWeight: 'bold',
  },
});

export default styles;
