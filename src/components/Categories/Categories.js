import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import stylesCategoris from './styles';

const CATEGORIES = [
  {
    _id: 1,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/1.png'),
    slug: '1',
  },
  {
    _id: 2,
    name: 'Đồ ăn nhanh',
    imageSlug: require('../../assets/images/categories/2.png'),
    slug: '2',
  },
  {
    _id: 3,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/3.png'),
    slug: '3',
  },
  {
    _id: 4,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/4.png'),
    slug: '4',
  },
  {
    _id: 5,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/5.png'),
    slug: '5',
  },
  {
    _id: 6,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/6.png'),
    slug: '6',
  },
  {
    _id: 7,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/7.png'),
    slug: '7',
  },
  {
    _id: 8,
    name: 'Đặc sản',
    imageSlug: require('../../assets/images/categories/8.png'),
    slug: '8',
  },
];

function Categories({navigation}) {
  return (
    <View style={stylesCategoris.categogiesContainer}>
      {CATEGORIES.map(category => (
        <TouchableOpacity
          key={category._id}
          onPress={() =>
            navigation.navigate('ListFoods', {slug: category.slug})
          }
          style={stylesCategoris.categoryWrapper}>
          <Image
            resizeMode="center"
            style={stylesCategoris.categoryImage}
            source={category.imageSlug}
          />
          <Text style={stylesCategoris.categoryName}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Categories;
