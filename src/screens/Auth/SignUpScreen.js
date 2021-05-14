import React, {useState} from 'react';
import {View, Text, TextInput, StatusBar, ScrollView} from 'react-native';
import stylesAuth from './styles';
import rootColor from '../../constants/color';
import ButtonPrimary from '../../components/Button/ButtonPrimary';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

import {useForm, Controller} from 'react-hook-form';
import Errors from '../../components/Auth/Errors';
import {callApiRegister} from '../../api/apiUsers';
import {useDispatch} from 'react-redux';
import {login} from '../../redux/actions/userAction';
import {createCart} from '../../redux/actions/cartAction';
import {IconButton} from 'react-native-paper';

const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function SignUpScreen() {
  const [isLoading, setIsLoading] = useState(false);
  const [isShowPass, setIsShowPass] = useState(false);
  const [isShowConfirmPass, setIsShowConfirmPass] = useState(false);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm();

  const onSubmit = async formData => {
    console.log(formData);
    setIsLoading(true);
    const newUser = await callApiRegister({
      name: formData.name,
      email: formData.email,
      password: formData.password,
      phoneNumber: formData.phoneNumber,
    });
    if (!newUser.data._id) {
      setIsLoading(false);
      alert(newUser.data);
    } else {
      const data = await Promise.all([
        dispatch(createCart(newUser.data._id)),
        dispatch(
          login({
            email: formData.email,
            password: formData.password,
          }),
        ),
      ]);
      console.log(data);
      return navigation.navigate('Home');
    }
  };

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
        <ScrollView style={stylesAuth.authFormWrapper}>
          <View style={{marginBottom: 8}}>
            <Text>Name</Text>
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
                    placeholder="Name"
                  />
                )}
                name="name"
                rules={{
                  required: {
                    value: true,
                    message: 'Name is required',
                  },
                }}
              />
            </View>
            {errors.name && <Errors error={errors.name} />}
          </View>

          <View style={{marginBottom: 8}}>
            <Text>Email</Text>
            <View style={stylesAuth.authFormInput}>
              <MaterialIcon name="email" style={stylesAuth.authIcon} />
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
                    placeholder="Password"
                    secureTextEntry={!isShowPass}
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
              <IconButton
                icon="eye"
                color={
                  !isShowPass
                    ? rootColor.grayPrimaryColor
                    : rootColor.primaryColor
                }
                size={22}
                onPress={() => setIsShowPass(!isShowPass)}
              />
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
                    placeholder="Confirm Password"
                    secureTextEntry={!isShowConfirmPass}
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
              <IconButton
                icon="eye"
                color={
                  !isShowConfirmPass
                    ? rootColor.grayPrimaryColor
                    : rootColor.primaryColor
                }
                size={22}
                onPress={() => setIsShowConfirmPass(!isShowConfirmPass)}
              />
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
                    placeholder="Phone"
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
            </View>
            {errors.phoneNumber && <Errors error={errors.phoneNumber} />}
          </View>
        </ScrollView>
        {/* End Form Input */}
        {/* Form Action */}
        <View style={stylesAuth.authFormAction}>
          <ButtonPrimary
            contents={[`${!isLoading ? 'Sign Up' : 'ActivityIndicator'}`]}
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
