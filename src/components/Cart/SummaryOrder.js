import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonPrimary from '../Button/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';
import convertMoney from '../../utils/convertMoney';
import {useDispatch, useSelector} from 'react-redux';
import {createMessOrder} from '../../redux/actions/messOrderAction';

function SummaryOrder(props) {
  const {cart, inputAddress} = props;
  const navigation = useNavigation();
  const user = useSelector(state => state.user);
  const lengthMessOrder = useSelector(state => state.messOrder.length);
  const dispatch = useDispatch();
  const handleOrderFood = async () => {
    if (cart.foods.length > 0) {
      if (!inputAddress) {
        alert('Your address is empty ! Please fill it ^_^');
      } else {
        await dispatch(
          createMessOrder({
            idUser: user._id,
            name: `Đơn hàng thứ ${lengthMessOrder + 1}`,
            foods: cart.foods,
            address: inputAddress,
            message: 'Test đơn hàng',
            totalMoney: convertMoney(
              cart.foods.reduce((totalMoney, food) => {
                let tmp = food.totalPrice * food.quanity;
                return (totalMoney += tmp);
              }, 0),
              'toString',
            ),
          }),
        );
        navigation.navigate('Messages');
      }
    } else {
      alert('no item for order');
    }
  };
  return (
    <View style={styles.summaryOrderContainer}>
      <View style={styles.summaryOrderMoney}>
        <Text style={styles.summaryOrderText}>
          {cart.foods &&
            convertMoney(
              cart.foods.reduce((totalMoney, food) => {
                let tmp = food.totalPrice * food.quanity;
                return (totalMoney += tmp);
              }, 0),
              'toString',
            )}{' '}
          đ
        </Text>
      </View>
      <View>
        <ButtonPrimary
          styles={styles.summaryOrderAction}
          callBack={handleOrderFood}
          contents={['Đặt hàng']}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  summaryOrderContainer: {
    flexDirection: 'row',
  },
  summaryOrderMoney: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  summaryOrderText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  summaryOrderAction: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SummaryOrder;
