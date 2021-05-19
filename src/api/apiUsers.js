import callApi from '../utils/callApi';
import {callApiWithOptions} from '../utils/callApi';

const callApiRegister = async formData => {
  const result = await callApi('post', 'users/register', formData);
  return result;
};

const callApiLogin = async formData => {
  console.log('login');
  const result = await callApi('post', 'users/login', formData);
  console.log(result.data);
  return result;
};

const callApiUpdateUser = async (idUser, formData) => {
  const result = await callApi('put', `users/update/${idUser}`, formData);
  console.log(result);
  console.log(result.data);

  return result.data;
};

const callApiCheckPassword = async (idUser, formData) => {
  const result = await callApi(
    'put',
    `users/update-password/check/${idUser}`,
    formData,
  );
  console.log(result);
  return result.data;
};

const callApiUpdatePassword = async (idUser, formData, userToken) => {
  const result = await callApiWithOptions(
    'put',
    `users/update-password/change/${idUser}`,
    formData,
    {authToken: userToken},
  );
  return result.data;
};

export {
  callApiRegister,
  callApiLogin,
  callApiUpdateUser,
  callApiCheckPassword,
  callApiUpdatePassword,
};
