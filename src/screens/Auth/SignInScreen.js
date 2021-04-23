import React from 'react';
import {View, Text, StatusBar, TextInput} from 'react-native';
import rootColor from '../../constants/color';
import stylesAuth from './styles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

function SignInScreen() {
  const navigation = useNavigation();
  return (
    <View style={stylesAuth.authContainer}>
      {/* Statusbar */}
      <StatusBar backgroundColor={rootColor.primaryColor} />
      {/* End StatusBar */}
      <View style={stylesAuth.authHeader}>
        <Animatable.Text
          animation="fadeInLeft"
          duration={2000}
          style={stylesAuth.authHeaderText}>
          Sign In For Order !
        </Animatable.Text>
      </View>
      {/* Auth Form */}
      <Animatable.View
        animation="bounceInUp"
        duration={2000}
        style={stylesAuth.authForm}>
        <Text style={stylesAuth.authFormHeader}>Sign In</Text>
        {/* Form Input */}
        <View style={stylesAuth.authFormWrapper}>
          <View style={{marginBottom: 8}}>
            <Text>Email</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="face" style={stylesAuth.authIcon} />
              <TextInput
                style={{flex: 1, marginHorizontal: 6}}
                placeholder="Email"
              />
              <MaterialIcon
                name="check-circle-outline"
                style={stylesAuth.authIcon}
              />
            </View>
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Password</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="lock" style={stylesAuth.authIcon} />
              <TextInput
                style={{flex: 1, marginHorizontal: 6}}
                placeholder="Password"
              />
              <MaterialIcon name="visibility-off" style={stylesAuth.authIcon} />
            </View>
          </View>
        </View>
        {/* End Form Input */}
        {/* Form Action */}
        <View style={stylesAuth.authFormAction}>
          <ButtonPrimary
            contents={['Sign In']}
            options={{width: '60%', height: 50}}
            callBack={() => alert('you login')}
          />
          <ButtonPrimary
            contents={['Sign Up']}
            outline
            options={{width: '60%', height: 50, marginVertical: 6}}
            callBack={() => navigation.navigate('SignUp')}
          />
        </View>
        {/* End Form Action */}
      </Animatable.View>
    </View>
  );
}

export default SignInScreen;
