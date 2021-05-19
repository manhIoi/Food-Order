import * as Types from '../types';

const messOrderReducer = (state = [], action) => {
  switch (action.type) {
    case Types.messOrderActionType.FECTH_MESS_ORDER:
      return action.payload;

    case Types.messOrderActionType.CREATE_MESS_ORDER:
      const cloneMessOrder = [...state, action.payload];
      return cloneMessOrder;

    case Types.messOrderActionType.READ_MESS_ORDER:
      const index = state.findIndex(
        mess => mess._id.localeCompare(action.payload._id) === 0,
      );
      console.log(index);
      if (index > -1) {
        return [
          ...state.slice(0, index),
          action.payload,
          ...state.slice(index + 1),
        ];
      }
      return state;

    case Types.messOrderActionType.MESSORDER_USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default messOrderReducer;
