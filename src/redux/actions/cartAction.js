import * as Types from '../types';

const fecthCart = () => {
  return {
    type: Types.cartActionType.FETCH_CART,
  };
};

const addToCart = food => {
  return {
    type: Types.cartActionType.ADD_TO_CART,
    payload: food,
  };
};

const removeFromCart = food => {
  return {
    type: Types.cartActionType.REMOVE_FROM_CART,
    payload: food,
  };
};

export {fecthCart, addToCart, removeFromCart};
