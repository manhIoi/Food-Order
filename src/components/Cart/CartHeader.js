import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import rootColor from '../../constants/color';

function CartHeader() {
  return (
    <View style={styles.container}>
      <Text numberOfLines={2} style={styles.headerText}>
        Ktx Khu B, Đông Hòa, Dĩ An, Bình Dương
      </Text>
      <TouchableOpacity style={styles.headerBtn}>
        <Text style={styles.headerTextBtn}>Thay đổi</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  headerText: {
    color: rootColor.grayPrimaryColor,
    flex: 3,
  },
  headerBtn: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTextBtn: {
    color: rootColor.primaryColor,
  },
});

export default CartHeader;
