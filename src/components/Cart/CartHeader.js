import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Input} from 'react-native-elements';
import rootColor from '../../constants/color';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

function CartHeader({inputAddress, setInputAddress}) {
  return (
    <View style={styles.container}>
      <Input
        inputContainerStyle={styles.inputAddress}
        style={{fontSize: 14, color: rootColor.primaryColor}}
        placeholder="Nhập địa chỉ giao hàng"
        value={inputAddress}
        onChangeText={value => setInputAddress(value)}
        rightIcon={
          <MaterialIcon
            name="location-on"
            size={20}
            color={rootColor.primaryColor}
          />
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  inputAddress: {
    width: '100%',
    height: 30,
  },
});

export default CartHeader;
