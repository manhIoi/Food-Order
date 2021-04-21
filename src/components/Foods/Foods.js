import React from 'react';
import {View, Text} from 'react-native';
import Food from './Food/Food';
import stylesFoods from './styles';

const FOODS = {
  header: 'Trà chanh',
  foods: [
    {
      _id: 1,
      slugFood: 1,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
    {
      _id: 2,
      slugFood: 2,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
    {
      _id: 3,
      slugFood: 3,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
    {
      _id: 4,
      slugFood: 4,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
    {
      _id: 5,
      slugFood: 5,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
    {
      _id: 6,
      slugFood: 6,
      foodName: 'Milo dầm bánh flan',
      foodPrice: '35.000',
      foodImage: 'https://i.ytimg.com/vi/vRKlrIIrpMA/maxresdefault.jpg',
    },
  ],
};

function Foods() {
  return (
    <View style={stylesFoods.foodsContainer}>
      <View style={stylesFoods.foodsHeader}>
        <Text style={stylesFoods.foodsHeaderText}>{FOODS.header}</Text>
      </View>
      <View>
        {FOODS.foods.map((food, index) => (
          <Food
            key={food._id}
            food={food}
            lastFood={index === FOODS.foods.length - 1}
          />
        ))}
      </View>
    </View>
  );
}

export default Foods;
