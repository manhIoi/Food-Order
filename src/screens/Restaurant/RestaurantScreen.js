import React, {useRef} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import Foods from '../../components/Foods/Foods';
import HeaderRestaurant from '../../components/HeaderRestaurant/HeaderRestaurant';
import TopNavigation from '../../components/HeaderRestaurant/TopNavigation';

function RestaurantScreen(props) {
  const {route} = props;
  const {restaurant} = route.params;
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
        {/* {restaurant.foodsCategories.map((foods, index) => (
          <Foods key={index} foods={foods} />
        ))} */}
      </ScrollView>
    </View>
  );
}

export default RestaurantScreen;
