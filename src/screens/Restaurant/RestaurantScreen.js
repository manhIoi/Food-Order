import React, {useRef} from 'react';
import {View, Text, ScrollView, Animated} from 'react-native';
import Foods from '../../components/Foods/Foods';
import HeaderRestaurant from '../../components/HeaderRestaurant/HeaderRestaurant';
import TopNavigation from '../../components/HeaderRestaurant/TopNavigation';

function RestaurantScreen() {
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
        <HeaderRestaurant scrollY={scrollY} />
        <Foods />
      </ScrollView>
    </View>
  );
}

export default RestaurantScreen;
