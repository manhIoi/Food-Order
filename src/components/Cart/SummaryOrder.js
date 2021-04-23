import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ButtonPrimary from '../Button/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';

function SummaryOrder() {
  const navigation = useNavigation();
  return (
    <View style={styles.summaryOrderContainer}>
      <View style={styles.summaryOrderMoney}>
        <Text style={styles.summaryOrderText}>207.400đ</Text>
      </View>
      <View>
        <ButtonPrimary
          styles={styles.summaryOrderAction}
          callBack={() => navigation.navigate('Auth')}
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