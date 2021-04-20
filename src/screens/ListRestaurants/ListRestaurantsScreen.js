import React from 'react';
import {Text, View} from 'react-native';

function ListRestaurantsScreen(props) {
  const {params} = props.route;
  console.log(params);
  return (
    <View>
      <Text>alo</Text>
    </View>
  );
}

export default ListRestaurantsScreen;
