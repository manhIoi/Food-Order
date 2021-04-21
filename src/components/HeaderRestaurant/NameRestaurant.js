import React from 'react';
import {StyleSheet, Text, TouchableHighlight, View} from 'react-native';
import rootColor from '../../constants/color';
function NameRestaurant() {
  return (
    <View style={styles.nameRestaurantContainer}>
      <View style={styles.nameRestaurantWrapper}>
        <Text style={styles.nameRestaurantStrongText}>
          Nobita Milk Tea And Fast Food
        </Text>
        <Text style={styles.nameRestaurantNormalText} numberOfLines={1}>
          <Text style={[styles.nameRestaurantNormalText, {fontWeight: '700'}]}>
            3.7km{' '}
          </Text>
          - 56 Hoàng Diệu 2, Linh Chiểu , Thủ Đức
        </Text>
      </View>
      <TouchableHighlight
        activeOpacity={0.3}
        underlayColor={rootColor.whiteColor}
        style={styles.moreInfoBtn}
        onPress={() => alert('Pressed!')}>
        <Text style={{color: rootColor.primaryColor}}>
          Xem thêm thông tin cửa hàng
        </Text>
      </TouchableHighlight>
    </View>
  );
}

const styles = StyleSheet.create({
  nameRestaurantContainer: {
    width: '100%',
    padding: 10,
    backgroundColor: rootColor.whiteColor,
    alignItems: 'center',
    minHeight: 100,
    borderBottomWidth: 1,
    borderBottomColor: rootColor.smokeColor,
  },
  nameRestaurantWrapper: {
    padding: 20,
    borderRadius: 10,
    width: '80%',
    backgroundColor: rootColor.whiteColor,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
    transform: [
      {
        translateY: -40,
      },
    ],
  },
  nameRestaurantStrongText: {
    fontSize: 20,
    fontWeight: '700',
  },
  nameRestaurantNormalText: {
    fontSize: 15,
    color: rootColor.grayPrimaryColor,
  },
  moreInfoBtn: {
    borderWidth: 1,
    borderColor: rootColor.primaryColor,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 8,
    transform: [
      {
        translateY: -13,
      },
    ],
  },
});

export default NameRestaurant;
