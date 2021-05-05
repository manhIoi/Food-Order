import * as Types from '../types';

const cartReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.cartActionType.FETCH_CART:
      return action.payload;

    case Types.cartActionType.CREATE_CART:
      return action.payload;

    case Types.cartActionType.ADD_TO_CART: {
      const cloneState = {
        ...state,
        foods: [...state.foods, action.payload],
      };
      return cloneState;
    }

    case Types.cartActionType.REMOVE_FROM_CART: {
      const indexFood = state.foods.indexOf(action.payload);
      const cloneState = {
        ...state,
        foods: [
          ...state.foods.slice(0, indexFood),
          ...state.foods.slice(indexFood + 1),
        ],
      };
      return cloneState;
    }
    default:
      return state;
  }
};

export default cartReducer;
