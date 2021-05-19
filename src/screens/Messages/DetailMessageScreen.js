import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {ScrollView} from 'react-native';
import {View, Text} from 'react-native';
import {useDispatch} from 'react-redux';
import Food from '../../components/Foods/Food/Food';
import rootColor from '../../constants/color';
import {readMessOrder} from '../../redux/actions/messOrderAction';

function DetailMessageScreen({route}) {
  const {message} = route.params;
  const dispatch = useDispatch();
  useEffect(async () => {
    if (!message.isRead) {
      await dispatch(readMessOrder(message._id));
    }
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.containerWrap}>
        <View style={styles.titleContainer}>
          <View>
            <View style={styles.titleDecoration}></View>
            <Text style={styles.textStrong}>{message.name}</Text>
          </View>
        </View>
        <Text style={styles.textNormal}>Giao hàng đến {message.address}</Text>
        <Text style={styles.textNormal}>Trạng thái: {message.status}</Text>
        <Text style={styles.textNormal}>Đặt hàng vào ngày: {message.date}</Text>
        <Text>Tổng cộng: {message.totalMoney} đ</Text>
      </View>

      <View style={styles.containerWrap}>
        <View style={styles.titleContainer}>
          <View>
            <View style={styles.titleDecoration}></View>
            <Text style={styles.textStrong}>Chi tiết đơn hàng: </Text>
          </View>
        </View>
        <ScrollView>
          {message.foods.map((food, index) => (
            <Food food={food} lastFood={index === message.foods.length - 1} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 200,
  },
  containerWrap: {
    backgroundColor: rootColor.whiteColor,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  titleContainer: {
    paddingVertical: 4,
    marginBottom: 4,
    alignItems: 'flex-start',
  },
  titleDecoration: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: '40%',
    bottom: 0,
    borderRadius: 2,
    backgroundColor: rootColor.primaryColor,
  },
  textStrong: {
    fontSize: 25,
    color: '#474747',
    fontWeight: 'bold',
  },
  textNormal: {
    marginVertical: 4,
  },
});

export default DetailMessageScreen;
