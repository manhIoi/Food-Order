import React from 'react';
import {View, Text} from 'react-native';
import Food from './Food/Food';
import stylesFoods from './styles';

function Foods(props) {
  const {foods} = props;
  return (
    <View style={stylesFoods.foodsContainer}>
      <View style={stylesFoods.foodsHeader}>
        <Text style={stylesFoods.foodsHeaderText}>{foods.header}</Text>
      </View>
      <View>
        {foods.foods.map((food, index) => (
          <Food
            key={food.id}
            food={food}
            lastFood={index === foods.foods.length - 1}
          />
        ))}
      </View>
    </View>
  );
}

export default Foods;
