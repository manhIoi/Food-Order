import React from 'react';
import {ScrollView, View} from 'react-native';
import Banner from '../../components/Banner/Banner';
import Categories from '../../components/Categories/Categories';

function HomeScreen(props) {
  const {navigation} = props;
  console.log(navigation);
  return (
    <ScrollView style={{backgroundColor: '#f1f1f1'}}>
      <Banner />
      <Categories navigation={navigation} />
    </ScrollView>
  );
}

export default HomeScreen;
