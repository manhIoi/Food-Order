import React from 'react';
import {Image, Text, View} from 'react-native';
import stylesFood from './styles';

function Food(props) {
  const {food, lastFood} = props;
  return (
    <View style={[stylesFood.foodContainer, lastFood && stylesFood.lastFood]}>
      <View style={stylesFood.foodDescription}>
        <Text style={[stylesFood.foodText, stylesFood.foodName]}>
          {food.foodName}
        </Text>
        <Text style={stylesFood.foodText}>{food.foodPrice}đ</Text>
      </View>
      <View style={stylesFood.foodImageWrapper}>
        <Image
          resizeMode="cover"
          style={stylesFood.foodImage}
          source={{
            uri: food.foodImage,
          }}
        />
      </View>
    </View>
  );
}

export default Food;
