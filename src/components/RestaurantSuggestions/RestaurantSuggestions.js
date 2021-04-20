import React from 'react';
import {Image, ScrollView, Text, View} from 'react-native';
import stylesSuggestions from './styles';

const SUGGESTIONS = {
  header: 'Sài Gòn hôm nay có gì ?',
  suggestions: [
    {
      _id: 1,
      image:
        'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
      strongText: 'Ăn ngoài kế hoạch',
      normalText: 'Menu cho buổi liên hoan bất chợt',
    },
    {
      _id: 2,
      image:
        'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
      strongText: 'Ăn ngoài kế hoạch',
      normalText: 'Menu cho buổi liên hoan bất chợt',
    },
    {
      _id: 3,
      image:
        'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
      strongText: 'Ăn ngoài kế hoạch',
      normalText: 'Menu cho buổi liên hoan bất chợt',
    },
    {
      _id: 4,
      image:
        'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
      strongText: 'Ăn ngoài kế hoạch',
      normalText: 'Menu cho buổi liên hoan bất chợt',
    },
    {
      _id: 5,
      image:
        'https://media-exp1.licdn.com/dms/image/C561BAQHsGu0_rbX2JQ/company-background_10000/0/1592190729149?e=2159024400&v=beta&t=duTt56eUqyz3JCxqdwPD1pZdKerPf6faMkkGR4Rd7UQ',
      strongText: 'Ăn ngoài kế hoạch',
      normalText: 'Menu cho buổi liên hoan bất chợt',
    },
  ],
};

function RestaurantSuggestions() {
  return (
    <View style={stylesSuggestions.suggestionsContainer}>
      <View style={stylesSuggestions.suggestionsHeader}>
        <Text style={stylesSuggestions.suggestionsHeaderStrong}>
          {SUGGESTIONS.header}
        </Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {SUGGESTIONS.suggestions.map(suggestion => (
          <View
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
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

export default RestaurantSuggestions;
