import {callApiCategories} from './apiCategories';
import {callApiPromos} from './apiPromos';
import {
  callApiRestaurantByCategory,
  callApiRestaurantBySuggestion,
  callApiRestaurant,
} from './apiRestaurant';
import {callSuggestion} from './apiSuggestion';

const rootApi = {
  callApiCategories,
  callApiPromos,
  callApiRestaurant,
  callApiRestaurantByCategory,
  callSuggestion,
  callApiRestaurantBySuggestion,
};

export default rootApi;
