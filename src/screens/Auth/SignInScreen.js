import React, {useEffect} from 'react';
import {View, Text, StatusBar, TextInput, Button} from 'react-native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import {useForm, Controller} from 'react-hook-form';

import rootColor from '../../constants/color';
import stylesAuth from './styles';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import Errors from '../../components/Auth/Errors';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/userAction';
import rootApi from '../../api';
import {fecthCart} from '../../redux/actions/cartAction';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignInScreen() {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async formData => {
    const res = await dispatch(login(formData));
    if (res.userToken) {
      await dispatch(fecthCart(res.body._id));
      navigation.goBack();
    } else {
      alert(res);
    }
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

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
                    message: 'Email is bad format',
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
                    secureTextEntry={true}
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
                    message: 'Password is required at lease 6 character',
                  },
                }}
              />
              <MaterialIcon name="visibility-off" style={stylesAuth.authIcon} />
            </View>
            {errors.password && <Errors error={errors.password} />}
          </View>
        </View>

        {/* End Form Input */}

        {/* Form Action */}
        <View style={stylesAuth.authFormAction}>
          <ButtonPrimary
            contents={['Sign In']}
            options={{width: '60%', height: 50}}
            callBack={handleSubmit(onSubmit)}
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
