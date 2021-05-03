import * as Types from '../types';
const userReducer = (state = {}, action) => {
  switch (action.type) {
    case Types.userActionType.LOGIN:
      state = action.payload;
      return state;
    default:
      return state;
  }
};

export default userReducer;
