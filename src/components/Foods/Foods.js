import React from 'react';
import {View, Text} from 'react-native';
import Food from './Food/Food';
import stylesFoods from './styles';

function Foods(props) {
  const {foods} = props;
  console.log(foods);
  return (
    <View style={stylesFoods.foodsContainer}>
      <View>
        {foods.map((food, index) => (
          <Food
            key={food._id}
            food={food}
            lastFood={index === foods.length - 1}
          />
        ))}
      </View>
    </View>
  );
}

export default Foods;
