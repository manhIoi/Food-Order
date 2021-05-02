import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {IconButton} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import rootColor from '../../constants/color';
import {removeFromCart} from '../../redux/actions/cartAction';

function CartFood(props) {
  const {food} = props;
  const dispatch = useDispatch();
  return (
    <View style={styles.cartFoodcontainer}>
      <View style={styles.cartFoodWrapper}>
        <Text style={{marginRight: 10, color: rootColor.grayPrimaryColor}}>
          {food.quanity}x
        </Text>
        <Text>{food.name}</Text>
      </View>
      <View style={styles.cartFoodWrapper}>
        <Text>{food.totalPrice} đ</Text>
        <IconButton
          icon="delete"
          color={rootColor.primaryColor}
          size={20}
          onPress={() => dispatch(removeFromCart(food))}
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
