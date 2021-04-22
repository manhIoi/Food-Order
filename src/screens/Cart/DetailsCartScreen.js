import React from 'react';
import {View, Text} from 'react-native';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import {useNavigation} from '@react-navigation/native';

function DetailsCartScreen() {
  const navigation = useNavigation();
  return (
    <View>
      <Text>this is Details Cart Screen</Text>
      <ButtonPrimary
        contents={['go to login']}
        callBack={() => navigation.navigate('Auth')}
      />
    </View>
  );
}

export default DetailsCartScreen;
