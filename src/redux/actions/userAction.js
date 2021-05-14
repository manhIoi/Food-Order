import {
  callApiLogin,
  callApiUpdatePassword,
  callApiUpdateUser,
} from '../../api/apiUsers';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Types from '../types';

const login = formData => async dispatch => {
  try {
    const {data} = await callApiLogin(formData);
    console.log(data);
    if (data.userToken) {
      const userJSON = JSON.stringify({
        ...formData,
        _id: data.body._id,
        userToken: data.userToken,
      });
      await AsyncStorage.setItem('user', userJSON);

      dispatch({
        type: Types.userActionType.LOGIN,
        payload: data.body,
      });
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

const logout = () => async dispatch => {
  try {
    const body = await AsyncStorage.removeItem('user');
    console.log(body);
    dispatch({
      type: Types.userActionType.LOGOUT,
      payload: {},
    });
    dispatch({
      type: Types.messOrderActionType.MESSORDER_USER_LOGOUT,
      payload: [],
    });
    dispatch({
      type: Types.cartActionType.CART_USER_LOGOUT,
      payload: {},
    });
  } catch (error) {
    console.log(error);
  }
};

const updateUser = (idUser, formData) => async dispatch => {
  try {
    const userJson = await AsyncStorage.getItem('user');
    const userObj = JSON.parse(userJson);
    await AsyncStorage.setItem(
      'user',
      JSON.stringify({
        ...userObj,
        email: formData.email,
      }),
    );

    const data = await callApiUpdateUser(idUser, formData);
    return dispatch({
      type: Types.userActionType.UPDATE_USER,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

const changePassword = (idUser, formData) => async dispatch => {
  try {
    const body = await callApiUpdatePassword(idUser, formData);
    console.log(body);
    if (body._id) {
      const userJson = await AsyncStorage.getItem('user');
      console.log(userJson);

      const userObj = JSON.parse(userJson);
      await AsyncStorage.setItem(
        'user',
        JSON.stringify({
          ...userObj,
          password: formData.password,
        }),
      );

      const test = await AsyncStorage.getItem('user');
      console.log(test);

      return dispatch({
        type: Types.userActionType.CHANGE_PASSWORD,
        payload: body.password,
      });
    } else {
      return {error: body};
    }
  } catch (error) {
    console.log(error);
  }
};

export {login, logout, updateUser, changePassword};
