import React from 'react';
import {ScrollView, View} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Promos from '../../components/Promos/Promos';
import RestaurantSuggestions from '../../components/RestaurantSuggestions/RestaurantSuggestions';

function HomeScreen(props) {
  const {navigation} = props;
  console.log(navigation);
  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Banner />
      <Categories navigation={navigation} />
      <Promos />
      <Promos />
      <Promos />
      <Promos />
      <RestaurantSuggestions />
      <RestaurantSuggestions />
      <RestaurantSuggestions />
    </ScrollView>
  );
}

export default HomeScreen;
