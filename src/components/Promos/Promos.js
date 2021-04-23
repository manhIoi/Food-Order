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
          {promos.headerPromos.headerStrong}
        </Text>
        <Text style={stylesPromos.prmosHeaderNormal}>
          {promos.headerPromos.headerNormal}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {promos.promos.map(promo => (
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => navitaion.navigate('Restaurant')}
            key={promo._id}
            style={stylesPromos.promoContainer}>
            <Image
              style={stylesPromos.promoImage}
              resizeMode="cover"
              source={{
                uri: promo.image,
              }}
            />
            <View style={stylesPromos.promoFooter}>
              <Text numberOfLines={2} style={stylesPromos.promoFooterText}>
                <MaterialIcon
                  name="bookmark"
                  style={stylesPromos.promoFooterIcon}
                />
                {promo.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default Promos;
