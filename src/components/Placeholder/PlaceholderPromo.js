import {
  Placeholder,
  PlaceholderMedia,
  PlaceholderLine,
  Fade,
} from 'rn-placeholder';

import React from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native';

function PlaceholderPromo() {
  return (
    <Placeholder Animation={Fade} style={{marginVertical: 10}}>
      <PlaceholderLine width={50} />
      <PlaceholderLine width={50} />
      <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
        <View
          style={{
            marginVertical: 4,
            marginHorizontal: 8,
          }}>
          <PlaceholderMedia
            style={{
              height: 200,
              width: 200,
              marginBottom: 10,
            }}
          />
          <PlaceholderLine width={60} />
        </View>
        <View
          style={{
            marginVertical: 4,
            marginHorizontal: 8,
          }}>
          <PlaceholderMedia
            style={{
              height: 200,
              width: 200,
              marginBottom: 10,
            }}
          />
          <PlaceholderLine width={60} />
        </View>
        <View
          style={{
            marginVertical: 4,
            marginHorizontal: 8,
          }}>
          <PlaceholderMedia
            style={{
              height: 200,
              width: 200,
              marginBottom: 10,
            }}
          />
          <PlaceholderLine width={60} />
        </View>
      </ScrollView>
    </Placeholder>
  );
}

export default PlaceholderPromo;
