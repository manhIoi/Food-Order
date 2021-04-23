import React from 'react';
import {ScrollView, View} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Promos from '../../components/Promos/Promos';
import Restaurant from '../../components/Restaurants/Restaurant/Restaurant';
import Restaurants from '../../components/Restaurants/Restaurants';
import RestaurantSuggestions from '../../components/RestaurantSuggestions/RestaurantSuggestions';

// fakeDAta
import {CATEGORIES, LIST_PROMOS} from '../../../data';

function HomeScreen(props) {
  const {navigation} = props;
  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Banner />
      <Categories categories={CATEGORIES} navigation={navigation} />
      {LIST_PROMOS.map(promos => (
        <Promos key={promos._id} promos={promos} />
      ))}
      <RestaurantSuggestions />
      <RestaurantSuggestions />
      <RestaurantSuggestions />
      <Restaurants />
      <Restaurants />
    </ScrollView>
  );
}

export default HomeScreen;
