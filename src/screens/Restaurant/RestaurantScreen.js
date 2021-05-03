import React, {useRef, useState, useEffect} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import rootApi from '../../api';
import Foods from '../../components/Foods/Foods';
import HeaderRestaurant from '../../components/HeaderRestaurant/HeaderRestaurant';
import TopNavigation from '../../components/HeaderRestaurant/TopNavigation';

function RestaurantScreen(props) {
  const {route} = props;
  const {restaurant} = route.params;

  const [foods, setFoods] = useState([]);

  useEffect(async () => {
    const foodApi = await rootApi.callApiFoodByRes(restaurant._id);
    await setFoods(foodApi);
  }, []);

  const scrollY = useRef(new Animated.Value(0)).current;
  return (
    <View>
      <TopNavigation scrollY={scrollY} title="Restaurant" />
      <ScrollView
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}>
        <HeaderRestaurant
          restaurant={restaurant}
          image={restaurant.image}
          scrollY={scrollY}
        />
        <Foods foods={foods} />
        {/* {restaurant.foodsCategories.map((foods, index) => (
          <Foods key={index} foods={foods} />
        ))} */}
      </ScrollView>
    </View>
  );
}

export default RestaurantScreen;
