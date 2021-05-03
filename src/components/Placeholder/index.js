import React from 'react';
import {ScrollView} from 'react-native';
import PlaceholderBanner from './PlaceholderBanner';
import PlaceholderCate from './PlaceholderCate';
import PlaceholderPromo from './PlaceholderPromo';

const HomePlaceHolder = () => {
  return (
    <ScrollView>
      <PlaceholderBanner />
      <PlaceholderCate />
      <PlaceholderPromo />
      <PlaceholderPromo />
    </ScrollView>
  );
};

export {HomePlaceHolder};
