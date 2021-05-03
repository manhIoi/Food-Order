import React, {useEffect, useState} from 'react';
import {View, Text, ScrollView} from 'react-native';
import {
  callApiRestaurantByCategory,
  callApiRestaurantBySuggestion,
} from '../../api/apiRestaurant';
import FoodBanner from '../../components/FoodBanner/FoodBanner';
import Restaurants from '../../components/Restaurants/Restaurants';

function ListRestaurantScreen(props) {
  const [listRestaurant, setListRestaurant] = useState([]);
  const {route} = props;
  const {cateId, suggestionId, image} = route.params;

  useEffect(async () => {
    const listRestaurantApi =
      (cateId && (await callApiRestaurantByCategory(cateId))) ||
      (suggestionId && (await callApiRestaurantBySuggestion(suggestionId)));
    setListRestaurant(listRestaurantApi);
  }, []);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <FoodBanner image={image} />
      <Restaurants listRestaurant={listRestaurant} />
    </ScrollView>
  );
}

export default ListRestaurantScreen;
