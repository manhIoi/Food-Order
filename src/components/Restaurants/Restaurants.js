import React from 'react';
import {View, Text, Image} from 'react-native';
import Restaurant from './Restaurant/Restaurant';
import stylesRestaurants from './styles';

function Restaurants(props) {
  const {listRestaurant} = props;

  return (
    <View style={stylesRestaurants.restaurantsContainer}>
      <View style={stylesRestaurants.restaurantsHeader}>
        <Text style={stylesRestaurants.restaurantsHeaderText}>
          Quanh đây có gì ngon
        </Text>
      </View>
      <View>
        {listRestaurant &&
          listRestaurant.map((restaurant, index) => (
            <Restaurant
              key={restaurant._id}
              restaurant={restaurant}
              lastRestaurant={index === listRestaurant.length - 1}
            />
          ))}
      </View>
    </View>
  );
}

export default Restaurants;
