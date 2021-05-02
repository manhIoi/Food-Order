import React from 'react';
import {StyleSheet} from 'react-native';
import {View, Text, Image} from 'react-native';
import rootColor from '../../constants/color';
import * as Animatable from 'react-native-animatable';

function SplashScreen() {
  return (
    <View style={styles.splashContainer}>
      <View style={styles.splashsloganContainer}>
        <Animatable.Text
          animation="bounceInLeft"
          duration={2000}
          style={styles.splashSloganTextStrong}>
          Ffoods
        </Animatable.Text>
        <Animatable.Text
          animation="bounceInRight"
          duration={2000}
          style={styles.splashSloganTextNormal}>
          Food in 5 minutes
        </Animatable.Text>
      </View>
      <Animatable.Image
        animation="bounceInUp"
        duration={2000}
        style={styles.splashImage}
        resizeMode="contain"
        source={require('../../assets/images/splash/splashIntro.png')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    backgroundColor: rootColor.primaryColor,
  },
  splashImage: {
    width: '100%',
  },
  splashsloganContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  splashSloganTextStrong: {
    fontSize: 45,
    textAlign: 'center',
    fontWeight: 'bold',
    color: rootColor.whiteColor,
  },
  splashSloganTextNormal: {
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'normal',
    color: rootColor.whiteColor,
  },
});

export default SplashScreen;
