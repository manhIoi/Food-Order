import React, {useEffect, useRef} from 'react';
import {View, Text, TextInput, StatusBar} from 'react-native';
import stylesAuth from './styles';
import rootColor from '../../constants/color';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import {useForm, Controller} from 'react-hook-form';
import Errors from '../../components/Auth/Errors';
import {callApiRegister} from '../../api/apiUsers';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignUpScreen() {
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async formData => {
    callApiRegister({
      name: 'user',
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    });
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <View style={stylesAuth.authContainer}>
      <StatusBar backgroundColor={rootColor.primaryColor} />
      <View style={stylesAuth.authHeader}>
        <Animatable.Text
          animation="fadeInLeft"
          duration={2000}
          style={stylesAuth.authHeaderText}>
          Sign Up For Order !
        </Animatable.Text>
      </View>
      {/* Auth Form */}
      <Animatable.View
        animation="bounceInUp"
        duration={2000}
        style={[stylesAuth.authForm, {flex: 4}]}>
        <Text style={stylesAuth.authFormHeader}>Sign Up</Text>
        {/* Form Input */}
        <View style={stylesAuth.authFormWrapper}>
          <View style={{marginBottom: 8}}>
            <Text>Email</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="face" style={stylesAuth.authIcon} />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={{
                      flex: 1,
                      marginHorizontal: 6,
                    }}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Email"
                  />
                )}
                name="email"
                rules={{
                  required: {
                    value: true,
                    message: 'Email is required',
                  },
                  pattern: {
                    value: re,
                    message: 'Email is bad formated',
                  },
                }}
              />
              <MaterialIcon
                name="check-circle-outline"
                style={stylesAuth.authIcon}
              />
            </View>
            {errors.email && <Errors error={errors.email} />}
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Password</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="lock" style={stylesAuth.authIcon} />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={{
                      flex: 1,
                      marginHorizontal: 6,
                    }}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Email"
                  />
                )}
                name="password"
                rules={{
                  required: {
                    value: true,
                    message: 'Password is required',
                  },
                  minLength: {
                    value: 6,
                    message: 'Password required at lease 6 character',
                  },
                }}
              />
              <MaterialIcon name="visibility-off" style={stylesAuth.authIcon} />
            </View>
            {errors.password && <Errors error={errors.password} />}
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Confirm Password</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="lock" style={stylesAuth.authIcon} />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={{
                      flex: 1,
                      marginHorizontal: 6,
                    }}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Email"
                  />
                )}
                name="confirmPassword"
                rules={{
                  required: {
                    value: true,
                    message: 'Confirm password is required',
                  },
                }}
              />
              <MaterialIcon name="visibility-off" style={stylesAuth.authIcon} />
            </View>
            {errors.confirmPassword && (
              <Errors error={errors.confirmPassword} />
            )}
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Phone Number</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="phone-iphone" style={stylesAuth.authIcon} />
              <Controller
                control={control}
                render={({field: {onChange, onBlur, value}}) => (
                  <TextInput
                    style={{
                      flex: 1,
                      marginHorizontal: 6,
                    }}
                    onBlur={onBlur}
                    onChangeText={value => onChange(value)}
                    value={value}
                    placeholder="Email"
                  />
                )}
                name="phoneNumber"
                rules={{
                  required: {
                    value: true,
                    message: 'Phone number is required',
                  },
                }}
              />
              <MaterialIcon
                name="check-circle-outline"
                style={stylesAuth.authIcon}
              />
            </View>
            {errors.phoneNumber && <Errors error={errors.phoneNumber} />}
          </View>
        </View>
        {/* End Form Input */}
        {/* Form Action */}
        <View style={stylesAuth.authFormAction}>
          <ButtonPrimary
            contents={['Sign Up']}
            options={{width: '60%', height: 50}}
            callBack={handleSubmit(onSubmit)}
          />
          <ButtonPrimary
            contents={['Sign In']}
            outline
            options={{width: '60%', height: 50, marginVertical: 6}}
            callBack={() => navigation.navigate('SignIn')}
          />
        </View>
        {/* End Form Action */}
      </Animatable.View>
    </View>
  );
}

export default SignUpScreen;
