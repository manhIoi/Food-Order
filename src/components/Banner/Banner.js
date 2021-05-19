import React, {useRef, useState} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import stylesBanner from './styles';
import Carousel, {Pagination} from 'react-native-snap-carousel';

const SLIDER_WIDTH = Dimensions.get('window').width;
const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);

function Banner(props) {
  const {banners} = props;
  let _slider1Ref = useRef();
  const [bannerCarousel, setBannerCarousel] = useState({
    activeIndex: 0,
    carouselItems: banners,
  });

  return (
    <View style={stylesBanner.bannerContainer}>
      <Carousel
        ref={c => (_slider1Ref = c)}
        layout={'default'}
        data={bannerCarousel.carouselItems}
        sliderWidth={SLIDER_WIDTH}
        itemWidth={ITEM_WIDTH}
        autoplay={true}
        enableMomentum={false}
        lockScrollWhileSnapping={true}
        autoplayInterval={2000}
        enableSnap={true}
        loop={true}
        scrollEnabled={false}
        autoplayDelay={2000}
        lockScrollWhileSnapping={true}
        renderItem={({item, index}) => (
          <Image
            style={stylesBanner.bannerImage}
            resizeMode="contain"
            source={{
              uri: item.image,
            }}
          />
        )}
        onSnapToItem={index =>
          setBannerCarousel({...bannerCarousel, activeIndex: index})
        }
      />
      <Pagination
        dotsLength={bannerCarousel.carouselItems.length}
        activeDotIndex={bannerCarousel.activeIndex}
        containerStyle={{
          position: 'absolute',
          bottom: 0,
          width: ITEM_WIDTH,
          left: (SLIDER_WIDTH - ITEM_WIDTH) / 2,
          paddingVertical: 0,
          paddingHorizontal: 0,
        }}
        dotStyle={{
          width: 20,
          height: 5,
          borderRadius: 5,
          backgroundColor: '#5e5e5e',
        }}
        inactiveDotStyle={{
          width: 10,
          height: 10,
          backgroundColor: '#00000087',
        }}
        inactiveDotOpacity={0.4}
        inactiveDotScale={0.6}
        carouselRef={_slider1Ref}
        tappableDots={_slider1Ref}
      />
    </View>
  );
}

export default Banner;
