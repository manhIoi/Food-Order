import {StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

const styles = StyleSheet.create({
  suggestionsContainer: {
    backgroundColor: rootColor.whiteColor,
    padding: 10,
    marginVertical: 10,
  },
  suggestionsHeader: {
    marginBottom: 8,
  },
  suggestionsHeaderStrong: {
    fontSize: 20,
    fontWeight: '700',
  },
  suggestionsHeaderNormal: {
    fontSize: 13,
    color: rootColor.grayPrimaryColor,
  },
  suggestionContainer: {
    width: 280,
    height: 150,
    marginRight: 16,
    marginVertical: 6,
  },
  suggestionImage: {
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 8,
  },
  suggestTextWrapper: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    padding: 8,
    zIndex: 1,
  },
  hightLight: {
    position: 'absolute',
    bottom: 0,
    top: '50%',
    left: 0,
    right: 0,
    opacity: 0.5,
    zIndex: 0,
  },
  suggestTextStrong: {
    color: rootColor.whiteColor,
    fontWeight: '700',
    fontSize: 17,
  },
  suggestTextNormal: {
    color: rootColor.whiteColor,
    fontSize: 15,
  },
});

export default styles;
