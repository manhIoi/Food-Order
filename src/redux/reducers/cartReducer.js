import * as Types from '../types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case Types.cartActionType.FETCH_CART:
      return state;

    case Types.cartActionType.ADD_TO_CART:
      return [...state, action.payload];

    case Types.cartActionType.REMOVE_FROM_CART:
      const indexFood = state.indexOf(action.payload);
      return [...state.slice(0, indexFood), ...state.slice(indexFood + 1)];
    default:
      return state;
  }
};

export default cartReducer;
