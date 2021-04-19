import React from 'react';
import {View, Text, Image} from 'react-native';
import stylesBanner from './styles';

function Banner() {
  return (
    <View style={stylesBanner.bannerContainer}>
      <Image
        style={stylesBanner.bannerImage}
        resizeMode="contain"
        source={{
          uri:
            'https://blog.baemin.vn/wp-content/uploads/2020/10/App-banner-720x360.jpg',
        }}
      />
    </View>
  );
}

export default Banner;
