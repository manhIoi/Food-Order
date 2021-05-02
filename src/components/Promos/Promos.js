import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import stylesPromos from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/core';

function Promos(props) {
  const {promos} = props;
  const navitaion = useNavigation();
  return (
    <View style={stylesPromos.promosContainer}>
      <View style={stylesPromos.promosHeader}>
        <Text style={stylesPromos.prmosHeaderStrong}>
          {promos.headerStrong}
        </Text>
        <Text style={stylesPromos.prmosHeaderNormal}>
          {promos.headerNormal}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {promos.listRestaurant.map(restaurant => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() =>
              navitaion.navigate('Restaurant', {restaurant: restaurant})
            }
            key={restaurant._id}
            style={stylesPromos.promoContainer}>
            <Image
              style={stylesPromos.promoImage}
              resizeMode="cover"
              source={{
                uri: restaurant.image,
              }}
            />
            <View style={stylesPromos.promoFooter}>
              <Text numberOfLines={2} style={stylesPromos.promoFooterText}>
                <MaterialIcon
                  name="bookmark"
                  style={stylesPromos.promoFooterIcon}
                />
                {restaurant.nameStrong}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Promos;
