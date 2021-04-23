import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import FoodBanner from '../../components/FoodBanner/FoodBanner';
import Restaurants from '../../components/Restaurants/Restaurants';

function ListRestaurantScreen() {
  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <FoodBanner />
      <Restaurants />
    </ScrollView>
  );
}

export default ListRestaurantScreen;
