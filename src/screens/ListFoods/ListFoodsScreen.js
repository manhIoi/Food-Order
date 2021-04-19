import React from 'react';
import {ScrollView, Text, View} from 'react-native';

function ListFoodsScreen(props) {
  const {params} = props.route;
  console.log(params);
  return (
    <ScrollView>
      <Text>This is detail {params.slug}</Text>
    </ScrollView>
  );
}

export default ListFoodsScreen;
