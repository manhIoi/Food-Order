import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, ScrollView, Text, View, TouchableOpacity} from 'react-native';
import stylesSuggestions from './styles';

function RestaurantSuggestions(props) {
  const {restaurantSuggestions} = props;
  const navigation = useNavigation();
  return (
    <View style={stylesSuggestions.suggestionsContainer}>
      <View style={stylesSuggestions.suggestionsHeader}>
        <Text style={stylesSuggestions.suggestionsHeaderStrong}>
          {restaurantSuggestions.header}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {restaurantSuggestions.listSuggestion.map(suggestion => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ListRestaurant', {
                suggestionId: suggestion._id,
                image: suggestion.image,
              })
            }
            activeOpacity={0.8}
            key={suggestion._id}
            style={stylesSuggestions.suggestionContainer}>
            <Image
              style={stylesSuggestions.suggestionImage}
              source={{
                uri: suggestion.image,
              }}
            />
            <View style={stylesSuggestions.suggestTextWrapper}>
              <Text
                numberOfLines={1}
                style={stylesSuggestions.suggestTextStrong}>
                {suggestion.strongText}
              </Text>
              <Text
                numberOfLines={1}
                style={stylesSuggestions.suggestTextNormal}>
                {suggestion.normalText}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

export default RestaurantSuggestions;
