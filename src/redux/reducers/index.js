import {combineReducers} from 'redux';
import cartReducer from './cartReducer';
import userReducer from './userReducer';
import messOrderReducer from './messOrderReducer';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: userReducer,
  messOrder: messOrderReducer,
});

export default rootReducer;
