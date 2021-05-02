import React from 'react';
import {View, Text, Image} from 'react-native';
import Restaurant from './Restaurant/Restaurant';
import stylesRestaurants from './styles';
import {LIST_RESTAURANTS} from '../../../data';

const RESTAURANTS = {
  header: 'Sài gòn hôm nay ăn gì?',
  restaurants: [
    {
      _id: 1,
      image:
        'https://images.foody.vn/res/g67/666692/prof/s576x330/foody-upload-api-foody-mobile-seatalk_img_15888236-200507105730.jpg',
      nameStrong: 'Cháo ếch Singapore Việt - Sing - Đường số 6',
      nameNormal: 'Cháo ếch Singapore',
      distance: '3.2 km',
      slugRestaurant: '1',
    },
    {
      _id: 2,
      image:
        'https://images.foody.vn/res/g67/666692/prof/s576x330/foody-upload-api-foody-mobile-seatalk_img_15888236-200507105730.jpg',
      nameStrong: 'Cháo ếch Singapore Việt - Sing - Đường số 6',
      nameNormal: 'Cháo ếch Singapore',
      distance: '3.2 km',
      slugRestaurant: '2',
    },
    {
      _id: 3,
      image:
        'https://images.foody.vn/res/g67/666692/prof/s576x330/foody-upload-api-foody-mobile-seatalk_img_15888236-200507105730.jpg',
      nameStrong: 'Cháo ếch Singapore Việt - Sing - Đường số 6',
      nameNormal: 'Cháo ếch Singapore',
      distance: '3.2 km',
      slugRestaurant: '3',
    },
    {
      _id: 4,
      image:
        'https://images.foody.vn/res/g67/666692/prof/s576x330/foody-upload-api-foody-mobile-seatalk_img_15888236-200507105730.jpg',
      nameStrong: 'Cháo ếch Singapore Việt - Sing - Đường số 6',
      nameNormal: 'Cháo ếch Singapore',
      distance: '3.2 km',
      slugRestaurant: '4',
    },
    {
      _id: 5,
      image:
        'https://images.foody.vn/res/g67/666692/prof/s576x330/foody-upload-api-foody-mobile-seatalk_img_15888236-200507105730.jpg',
      nameStrong: 'Cháo ếch Singapore Việt - Sing - Đường số 6',
      nameNormal: 'Cháo ếch Singapore',
      distance: '3.2 km',
      slugRestaurant: '5',
    },
  ],
};

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
              lastRestaurant={index === RESTAURANTS.restaurants.length - 1}
            />
          ))}
      </View>
    </View>
  );
}

export default Restaurants;
