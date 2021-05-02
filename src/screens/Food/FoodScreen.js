import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FoodBanner from '../../components/FoodBanner/FoodBanner';
import FormOrder from '../../components/FormOrder/FormOrder';

function FoodScreen(props) {
  const {route} = props;
  const {food} = route.params;
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', position: 'relative'}}>
      <FoodBanner image={food.image} />
      <FormOrder food={food} />
    </ScrollView>
  );
}

export default FoodScreen;
