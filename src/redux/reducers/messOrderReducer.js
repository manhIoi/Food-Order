import * as Types from '../types';

const messOrderReducer = (state = [], action) => {
  switch (action.type) {
    case Types.messOrderActionType.FECTH_MESS_ORDER:
      return action.payload;
    case Types.messOrderActionType.CREATE_MESS_ORDER:
      const cloneMessOrder = [action.payload, ...state];
      return cloneMessOrder;
    case Types.messOrderActionType.MESSORDER_USER_LOGOUT:
      return [];
    default:
      return state;
  }
};

export default messOrderReducer;
