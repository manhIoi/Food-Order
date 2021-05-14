import * as Types from '../types';
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.userActionType.LOGIN:
      state = action.payload;
      return state;
    case Types.userActionType.LOGOUT:
      state = action.payload;
      return state;
    case Types.userActionType.CHANGE_PASSWORD:
      state = {
        ...state,
        password: action.payload,
      };
      return state;
    case Types.userActionType.UPDATE_USER:
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    default:
      return state;
  }
};

export default userReducer;
