import {callApiLogin} from '../../api/apiUsers';
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
  } catch (error) {
    console.log(error);
  }
};

export {login, logout};
