import callApi from '../utils/callApi';

const callApiCategories = async () => {
  return await callApi('get', 'categories').then(res => res.data.body);
};

export {callApiCategories};
