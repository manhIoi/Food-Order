import callApi from '../utils/callApi';

const callApiFoodByRes = async idRes => {
  const foods = await callApi('get', `foods/food-by-res/${idRes}`);
  return foods.data;
};

export {callApiFoodByRes};
