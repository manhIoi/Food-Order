import {callApiCategories} from './apiCategories';
import {callApiPromos} from './apiPromos';
import {
  callApiRestaurantByCategory,
  callApiRestaurantBySuggestion,
  callApiRestaurant,
} from './apiRestaurant';
import {callSuggestion} from './apiSuggestion';
import {callApiFoodByRes} from './apiFoods';
import {
  callApiRegister,
  callApiLogin,
  callApiUpdateUser,
  callApiCheckPassword,
  callApiUpdatePassword,
} from './apiUsers';
import {
  callApiCart,
  callApiAddToCart,
  callApiRemoveFromCart,
  callApiCreateCart,
  callApiClearCart,
} from '../api/apiCart';
import {callApiMessOrder, callApiCreateMessOrder} from './apiMessOrder';
import {callApiBanner} from './apiBanner';

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
  callApiClearCart,
  callApiAddToCart,
  callApiRemoveFromCart,
  callApiCreateCart,
  callApiMessOrder,
  callApiCreateMessOrder,
  callApiUpdateUser,
  callApiCheckPassword,
  callApiUpdatePassword,
  callApiBanner,
};

export default rootApi;
