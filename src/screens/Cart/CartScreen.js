import React from 'react';
import {Button} from 'react-native';
import {View, Text} from 'react-native';

function CartScreen(props) {
  const {navigation} = props;
  return (
    <View>
      <Text>this is Cart Screen</Text>
      <Button
        title="go to details"
        onPress={() => navigation.navigate('DetailsCart')}
      />
    </View>
  );
}

export default CartScreen;
