import {IconButton} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// const navigation = useNavigation();
const configOptionsHeader = {
  headerAlign: 'center',
  headerLeft: callback => (
    <IconButton
      icon={() => <MaterialIcon name="arrow-back" size={24} color="#111" />}
      color="#111"
      size={20}
      onPress={() => callback()}
    />
  ),
};

export default configOptionsHeader;
