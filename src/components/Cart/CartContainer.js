import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import rootColor from '../../constants/color';

function CartContainer(props) {
  const {header, children, options} = props;
  return (
    <View style={[styles.container, options]}>
      <Text style={styles.header}>{header}</Text>
      <View>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: rootColor.whiteColor,
    marginBottom: 10,
  },
  header: {
    color: rootColor.grayPrimaryColor,
    marginBottom: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CartContainer;
