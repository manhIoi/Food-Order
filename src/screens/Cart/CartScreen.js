import React from 'react';
import {Button, ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import CartContainer from '../../components/Cart/CartContainer';
import CartFoods from '../../components/Cart/CartFoods';
import CartHeader from '../../components/Cart/CartHeader';
import SummaryOrder from '../../components/Cart/SummaryOrder';
import rootColor from '../../constants/color';
import demensions from '../../constants/demensions';

function CartScreen(props) {
  const {navigation} = props;
  return (
    <View style={{flex: 1, paddingBottom: demensions.orderSummaryH - 10}}>
      <ScrollView>
        <CartContainer header="Giao hàng đến">
          <CartHeader />
        </CartContainer>
        <CartContainer header="Đơn hàng của bạn">
          <CartFoods />
          <CartFoods />
          <CartFoods />
          <CartFoods />
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
          <SummaryOrder />
        </CartContainer>
      </View>
    </View>
  );
}

export default CartScreen;
