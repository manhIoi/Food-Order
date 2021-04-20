import React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import stylesPromos from './styles';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const PROMOS = {
  header: {
    headerStrong: 'Deal Hot chỉ 5k',
    headerNormal: 'Khao 20k cho đơn hàng từ 25k',
  },
  promos: [
    {
      _id: 1,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
      name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
    },
    {
      _id: 2,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
      name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
    },
    {
      _id: 3,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
      name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
    },
    {
      _id: 4,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
      name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
    },
    {
      _id: 5,
      image:
        'https://media-cdn.tripadvisor.com/media/photo-s/15/03/79/e3/otto-s-anatolian-food.jpg',
      name: 'Cộng rau má - Hoàng Diệu 2 babf abfbabf ababfa afb asf asf',
    },
  ],
};

function Promos() {
  return (
    <View style={stylesPromos.promosContainer}>
      <View style={stylesPromos.promosHeader}>
        <Text style={stylesPromos.prmosHeaderStrong}>
          {PROMOS.header.headerStrong}
        </Text>
        <Text style={stylesPromos.prmosHeaderNormal}>
          {PROMOS.header.headerNormal}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {PROMOS.promos.map(promo => (
          <TouchableOpacity key={promo._id} style={stylesPromos.promoContainer}>
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
