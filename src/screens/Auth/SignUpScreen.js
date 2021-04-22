import React from 'react';
import {View, Text, TextInput, StatusBar} from 'react-native';
import stylesAuth from './styles';
import rootColor from '../../constants/color';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

function SignUpScreen() {
  const navigation = useNavigation();
  return (
    <View style={stylesAuth.authContainer}>
      <StatusBar backgroundColor={rootColor.primaryColor} />
      <View style={stylesAuth.authHeader}>
        <Text style={stylesAuth.authHeaderText}>Sign Up For Order !</Text>
      </View>
      {/* Auth Form */}
      <View style={[stylesAuth.authForm, {flex: 4}]}>
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

          <View style={{marginBottom: 8}}>
            <Text>Confirm Password</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="lock" style={stylesAuth.authIcon} />
              <TextInput
                style={{flex: 1, marginHorizontal: 6}}
                placeholder="Password"
              />
              <MaterialIcon name="visibility-off" style={stylesAuth.authIcon} />
            </View>
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Phone Number</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="phone-iphone" style={stylesAuth.authIcon} />
              <TextInput
                style={{flex: 1, marginHorizontal: 6}}
                placeholder="Phone Number"
              />
              <MaterialIcon
                name="check-circle-outline"
                style={stylesAuth.authIcon}
              />
            </View>
          </View>
        </View>
        {/* End Form Input */}
        {/* Form Action */}
        <View style={stylesAuth.authFormAction}>
          <ButtonPrimary
            contents={['Sign Up']}
            options={{width: '60%', height: 50}}
            callBack={() => alert('you sign up')}
          />
          <ButtonPrimary
            contents={['Sign In']}
            outline
            options={{width: '60%', height: 50, marginVertical: 6}}
            callBack={() => navigation.navigate('SignIn')}
          />
        </View>
        {/* End Form Action */}
      </View>
    </View>
  );
}

export default SignUpScreen;
