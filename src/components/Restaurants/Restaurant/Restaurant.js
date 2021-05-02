import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import stylesRestaurant from './styles';
import {useNavigation} from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Restaurant(props) {
  const {restaurant, lastRestaurant} = props;
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() =>
        navigation.navigate('Restaurant', {restaurant: restaurant})
      }
      style={[
        stylesRestaurant.restaurantContainer,
        lastRestaurant && stylesRestaurant.lastRestaurant,
      ]}>
      <View style={stylesRestaurant.restaurantImageWrapper}>
        <Image
          style={stylesRestaurant.restaurantImage}
          resizeMode="cover"
          source={{
            uri: restaurant.image,
          }}
        />
      </View>

      <View style={stylesRestaurant.restaurantDesciption}>
        <View>
          <Text
            style={stylesRestaurant.restaurantDesciptionStrong}
            numberOfLines={2}>
            <Icon name="bookmark" style={stylesRestaurant.iconColor} />
            {restaurant.nameStrong}
          </Text>
          <Text style={stylesRestaurant.restaurantDesciptionNormal}>
            {restaurant.nameNormal}
          </Text>
        </View>
        <View>
          <Text style={stylesRestaurant.restaurantDesciptionNormal}>
            {restaurant.distance}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default Restaurant;
