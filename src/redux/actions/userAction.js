import {callApiLogin} from '../../api/apiUsers';
import * as Types from '../types';

const login = formData => async dispatch => {
  try {
    const {data} = await callApiLogin(formData);
    if (data.userToken) {
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

export {login};
