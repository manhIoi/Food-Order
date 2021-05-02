import callApi from '../utils/callApi';

const callApiRestaurantByCategory = async idCate => {
  const restaurants = await callApi('get', `restaurants/${idCate}`);
  const result = restaurants.data;
  return result;
};

const callApiRestaurantBySuggestion = async idSuggestion => {
  const restaurants = await callApi(
    'get',
    `restaurants/getRes/res-suggestion/${idSuggestion}`,
  );
  return restaurants.data;
};

const callApiRestaurant = async () => {
  const restaurants = await callApi('get', 'restaurants');
  return restaurants.data.body;
};

export {
  callApiRestaurantByCategory,
  callApiRestaurantBySuggestion,
  callApiRestaurant,
};
