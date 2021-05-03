import callApi from '../utils/callApi';

const callApiRegister = async formData => {
  console.log(formData);
  const result = await callApi('post', 'users/register', formData);
  console.log(result);
  return result;
};

const callApiLogin = async formData => {
  const result = await callApi('post', 'users/login', formData);
  return result;
};

export {callApiRegister, callApiLogin};
