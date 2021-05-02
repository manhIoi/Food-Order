import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {
  Image,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import stylesFood from './styles';

function Food(props) {
  const {food, lastFood} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Food', {food: food})}
      style={[stylesFood.foodContainer, lastFood && stylesFood.lastFood]}>
      <View style={stylesFood.foodDescription}>
        <Text style={[stylesFood.foodText, stylesFood.foodName]}>
          {food.name}
        </Text>
        <Text style={stylesFood.foodText}>{food.price}đ</Text>
      </View>
      <View style={stylesFood.foodImageWrapper}>
        <Image
          resizeMode="cover"
          style={stylesFood.foodImage}
          source={{
            uri: food.image,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Food;
