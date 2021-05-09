import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

import stylesCategoris from './styles';

function Categories({navigation, categories}) {
  return (
    <View style={stylesCategoris.categogiesContainer}>
      {categories.map(category => (
        <TouchableOpacity
          key={category._id}
          onPress={() =>
            navigation.navigate('ListRestaurant', {cateId: category._id})
          }
          style={stylesCategoris.categoryWrapper}>
          <Image
            resizeMode="center"
            style={stylesCategoris.categoryImage}
            source={{uri: category.image}}
          />
          <Text style={stylesCategoris.categoryName}>{category.name}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}

export default Categories;
