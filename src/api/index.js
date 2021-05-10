import {callApiCategories} from './apiCategories';
import {callApiPromos} from './apiPromos';
import {
  callApiRestaurantByCategory,
  callApiRestaurantBySuggestion,
  callApiRestaurant,
} from './apiRestaurant';
import {callSuggestion} from './apiSuggestion';
import {callApiFoodByRes} from './apiFoods';
import {callApiRegister, callApiLogin} from './apiUsers';
import {
  callApiCart,
  callApiAddToCart,
  callApiRemoveFromCart,
  callApiCreateCart,
} from '../api/apiCart';
import {callApiMessOrder} from './apiMessOrder';

const rootApi = {
  callApiCategories,
  callApiPromos,
  callApiRestaurant,
  callApiRestaurantByCategory,
  callSuggestion,
  callApiRestaurantBySuggestion,
  callApiFoodByRes,
  callApiRegister,
  callApiLogin,
  callApiCart,
  callApiAddToCart,
  callApiRemoveFromCart,
  callApiCreateCart,
  callApiMessOrder,
};

export default rootApi;
