import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import rootColor from '../../constants/color';

function CartFood() {
  return (
    <View style={styles.cartFoodcontainer}>
      <View style={styles.cartFoodWrapper}>
        <Text style={{marginRight: 10, color: rootColor.grayPrimaryColor}}>
          1x
        </Text>
        <Text>Rau câu trái dừa</Text>
      </View>
      <View style={styles.cartFoodWrapper}>
        <Text>28.000đ</Text>
        <IconButton
          icon="delete"
          color={rootColor.primaryColor}
          size={20}
          onPress={() => console.log('Pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cartFoodcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cartFoodWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default CartFood;
