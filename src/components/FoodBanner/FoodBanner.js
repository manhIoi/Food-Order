import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function FoodBanner(props) {
  const {image} = props;
  return (
    <View style={styles.foodBannerContainer}>
      <Image
        style={styles.foodBannerImage}
        source={{
          uri: image,
        }}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  foodBannerContainer: {
    height: 200,
    width: '100%',
  },
  foodBannerImage: {
    flex: 1,
  },
});

export default FoodBanner;
