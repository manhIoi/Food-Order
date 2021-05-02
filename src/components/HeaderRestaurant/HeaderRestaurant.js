import React from 'react';
import {View, Image, StyleSheet, Animated, Text} from 'react-native';
import NameRestaurant from './NameRestaurant';
const BANNER_H = 300;

function HeaderRestaurant(props) {
  const {scrollY, image, restaurant} = props;
  return (
    <View style={styles.bannerContainer}>
      <Animated.Image
        resizeMode="cover"
        style={styles.banner(scrollY)}
        source={{
          uri: image,
        }}
      />
      <NameRestaurant
        name={restaurant.nameStrong}
        nameDetail={restaurant.nameNormal}
        address={restaurant.address}
        distance={restaurant.distance}
      />
    </View>
  );
}

const styles = {
  bannerContainer: {
    alignItems: 'center',
    overflow: 'hidden',
  },
  banner: scrollY => {
    const result = {
      height: BANNER_H,
      width: '100%',
      transform: [
        {
          translateY: scrollY.interpolate({
            inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
            outputRange: [-BANNER_H / 2, 0, BANNER_H * 0.75, BANNER_H * 0.75],
          }),
        },
        {
          scale: scrollY.interpolate({
            inputRange: [-BANNER_H, 0, BANNER_H, BANNER_H + 1],
            outputRange: [2, 1, 0.5, 0.5],
          }),
        },
      ],
    };
    return result;
  },
};

export default HeaderRestaurant;
