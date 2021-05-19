import React, {useEffect, useState} from 'react';
import {ScrollView, View, Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

import CartContainer from '../../components/Cart/CartContainer';
import CartFood from '../../components/Cart/CartFood';
import CartHeader from '../../components/Cart/CartHeader';
import SummaryOrder from '../../components/Cart/SummaryOrder';
import rootColor from '../../constants/color';
import demensions from '../../constants/demensions';
import {useNavigation} from '@react-navigation/native';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import {clearCart} from '../../redux/actions/cartAction';

function CartScreen(props) {
  const navigation = useNavigation();
  const cart = useSelector(state => state.cart);
  const user = useSelector(state => state.user);
  const [inputAddress, setInputAddress] = useState('');
  const dispatch = useDispatch();

  const handleClearCart = idUser => {
    Alert.alert('Thông báo', 'Bạn có chắc muốn xóa ? :<', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {
        text: 'Ok',
        onPress: () => dispatch(clearCart(idUser)),
      },
    ]);
  };

  useEffect(() => {
    if (!user._id) {
      navigation.navigate('Auth');
    }
  }, []);
  return (
    <View style={{flex: 1, paddingBottom: demensions.orderSummaryH - 10}}>
      <ScrollView>
        <CartContainer header="Giao hàng đến">
          <CartHeader
            inputAddress={inputAddress}
            setInputAddress={setInputAddress}
          />
        </CartContainer>
        <CartContainer header="Đơn hàng của bạn">
          {cart.foods &&
            cart.foods.map(food => <CartFood key={food._id} food={food} />)}
          <View style={{alignItems: 'center', marginBottom: 4, marginTop: 12}}>
            <ButtonPrimary
              contents={['Xóa giỏ hàng']}
              options={{width: '50%'}}
              callBack={() => handleClearCart(user._id)}
            />
          </View>
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
          <SummaryOrder
            inputAddress={inputAddress}
            setInputAddress={setInputAddress}
            cart={cart}
          />
        </CartContainer>
      </View>
    </View>
  );
}

export default CartScreen;
