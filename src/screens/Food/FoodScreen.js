import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FoodBanner from '../../components/FoodBanner/FoodBanner';
import FormOrder from '../../components/FormOrder/FormOrder';

function FoodScreen() {
  return (
    <ScrollView
      style={{flex: 1, backgroundColor: '#fff', position: 'relative'}}>
      <FoodBanner />
      <FormOrder />
    </ScrollView>
  );
}

export default FoodScreen;
