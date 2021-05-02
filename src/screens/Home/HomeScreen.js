import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Promos from '../../components/Promos/Promos';
import Restaurant from '../../components/Restaurants/Restaurant/Restaurant';
import Restaurants from '../../components/Restaurants/Restaurants';
import RestaurantSuggestions from '../../components/RestaurantSuggestions/RestaurantSuggestions';
import rootApi from '../../api/index';

function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [listPromos, setListPromos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const {navigation} = props;

  useEffect(async () => {
    const apiCate = await rootApi.callApiCategories();
    await setCategories(apiCate);
    const apiPromos = await rootApi.callApiPromos();
    await setListPromos(apiPromos);
    const apiSuggestions = await rootApi.callSuggestion();
    await setSuggestions(apiSuggestions);
    const apiRestaurants = await rootApi.callApiRestaurant();
    await setRestaurants(apiRestaurants);
  }, []);
  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Banner />
      <Categories categories={categories} navigation={navigation} />
      {/* Promos */}
      {listPromos &&
        listPromos.map(promos => <Promos key={promos._id} promos={promos} />)}
      {/* End promos */}
      {/* restaurant suggestion */}
      {suggestions &&
        suggestions.map(restaurantSuggestions => (
          <RestaurantSuggestions
            key={restaurantSuggestions._id}
            restaurantSuggestions={restaurantSuggestions}
          />
        ))}
      {/* End restaurant suggestion */}
      <Restaurants listRestaurant={restaurants} />
    </ScrollView>
  );
}

export default HomeScreen;
