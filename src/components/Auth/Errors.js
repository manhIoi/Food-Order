import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import stylesAuth from './styles';

function Errors(props) {
  const {error} = props;
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   switch (error.type) {
  //     case 'required':
  //       return setMessage(`${error.ref.name} is required`);
  //     case 'pattern':
  //       return setMessage(`${error.ref.name} is bad format`);
  //     case 'minLength':
  //       return setMessage(`${error.ref.name} is required at lease 6 chacrater`);
  //     default:
  //       message;
  //   }
  // }, [error]);
  console.log(error);
  return (
    <View>
      <Text style={stylesAuth.errorMessage}>{error.message}</Text>
    </View>
  );
}

export default Errors;
