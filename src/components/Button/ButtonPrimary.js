import React from 'react';
import {
  StyleSheet,
  TouchableHighlight,
  Text,
  ActivityIndicator,
} from 'react-native';
import rootColor from '../../constants/color';

function ButtonPrimary(props) {
  const {contents, options, outline, callBack} = props;
  return (
    <TouchableHighlight
      activeOpacity={1}
      underlayColor={rootColor.secondaryColor}
      onPress={callBack}
      style={[
        styles.buttonContainer,
        outline && styles.buttonOutline,
        options,
      ]}>
      <>
        {contents &&
          contents.map((content, index) => {
            if (content !== 'ActivityIndicator') {
              return (
                <Text
                  key={index}
                  style={[
                    styles.textButton,
                    {
                      color: outline
                        ? rootColor.primaryColor
                        : rootColor.whiteColor,
                    },
                  ]}>
                  {content}
                </Text>
              );
            } else {
              return (
                <ActivityIndicator color={rootColor.whiteColor} size="small" />
              );
            }
          })}
      </>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    flexDirection: 'row',
    backgroundColor: rootColor.primaryColor,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
    minWidth: 150,
    minHeight: 50,
  },
  buttonOutline: {
    backgroundColor: rootColor.whiteColor,
    borderColor: rootColor.primaryColor,
    borderWidth: 1,
  },
  textButton: {
    fontSize: 16,
    fontWeight: '700',
  },
});

export default ButtonPrimary;
