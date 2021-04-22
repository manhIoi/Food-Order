import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

function FoodBanner() {
  return (
    <View style={styles.foodBannerContainer}>
      <Image
        style={styles.foodBannerImage}
        source={{
          uri:
            'http://file.hstatic.net/1000044340/file/cach-lam-tra-sua-truyen-thong-vuong_grande.png',
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
