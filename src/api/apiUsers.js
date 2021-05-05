import callApi from '../utils/callApi';

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

export {callApiRegister, callApiLogin};
