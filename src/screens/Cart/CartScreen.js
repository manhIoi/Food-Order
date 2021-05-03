import React, {useEffect} from 'react';
import {Button, ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';

import CartContainer from '../../components/Cart/CartContainer';
import CartFood from '../../components/Cart/CartFood';
import CartHeader from '../../components/Cart/CartHeader';
import SummaryOrder from '../../components/Cart/SummaryOrder';
import rootColor from '../../constants/color';
import demensions from '../../constants/demensions';

function CartScreen(props) {
  const cart = useSelector(state => state.cart);
  console.log(cart);
  return (
    <View style={{flex: 1, paddingBottom: demensions.orderSummaryH - 10}}>
      <ScrollView>
        <CartContainer header="Giao hàng đến">
          <CartHeader />
        </CartContainer>
        <CartContainer header="Đơn hàng của bạn">
          {cart && cart.map(food => <CartFood key={food._id} food={food} />)}
        </CartContainer>
      </ScrollView>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: demensions.orderSummaryH,
          borderTopColor: rootColor.smokeColor,
          borderTopWidth: 1,
        }}>
        <CartContainer
          header="Hóa đơn của bạn"
          options={{marginBottom: 0, height: '100%'}}>
          <SummaryOrder cart={cart} />
        </CartContainer>
      </View>
    </View>
  );
}

export default CartScreen;
