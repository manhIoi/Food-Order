import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {IconButton, Colors} from 'react-native-paper';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import rootColor from '../../constants/color';

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <View style={styles.counterContainer}>
      <IconButton
        onPress={() => setCount(count - 1)}
        icon={() => (
          <MaterialIcon
            style={[
              styles.buttonControl,
              count <= 1 && styles.buttonControlDisable,
            ]}
            name="remove-circle-outline"
            size={40}
          />
        )}
        color={rootColor.primaryColor}
        size={40}
        disabled={count <= 1}
      />
      <Text style={styles.counterText}>{count}</Text>
      <IconButton
        icon={() => (
          <MaterialIcon
            style={styles.buttonControl}
            name="add-circle-outline"
            size={40}
          />
        )}
        color={rootColor.primaryColor}
        size={40}
        onPress={() => setCount(count + 1)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  counterContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
  },
  counterText: {
    fontSize: 17,
    fontWeight: '700',
  },
  buttonControl: {
    color: rootColor.primaryColor,
  },
  buttonControlDisable: {
    color: rootColor.grayPrimaryColor,
  },
});

export default Counter;
