import React, {useEffect, useState} from 'react';
import {ScrollView, View} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';
import Promos from '../../components/Promos/Promos';
import Restaurants from '../../components/Restaurants/Restaurants';
import RestaurantSuggestions from '../../components/RestaurantSuggestions/RestaurantSuggestions';
import rootApi from '../../api/index';

import {HomePlaceHolder} from '../../components/Placeholder/index';

function HomeScreen(props) {
  const [categories, setCategories] = useState([]);
  const [banners, setBanners] = useState([]);
  const [listPromos, setListPromos] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const {navigation} = props;

  useEffect(() => {
    fecthApi();
  }, []);

  const fecthApi = async () => {
    try {
      setIsLoading(true);
      const data = await Promise.all([
        rootApi.callApiCategories(),
        rootApi.callApiPromos(),
        rootApi.callSuggestion(),
        rootApi.callApiRestaurant(),
        rootApi.callApiBanner(),
      ]);

      setCategories(data[0]);
      setListPromos(data[1]);
      setSuggestions(data[2]);
      setRestaurants(data[3]);
      setBanners(data[4]);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      {isLoading ? (
        <HomePlaceHolder />
      ) : (
        <>
          <Banner banners={banners} />
          <Categories categories={categories} navigation={navigation} />
          {/* Promos */}
          {listPromos &&
            listPromos.map(promos => (
              <Promos key={promos._id} promos={promos} />
            ))}
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
        </>
      )}
    </ScrollView>
  );
}

export default HomeScreen;
