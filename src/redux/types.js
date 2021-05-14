const cartActionType = {
  FETCH_CART: 'FETCH_CART',
  CREATE_CART: 'CREATE_CART',
  ADD_TO_CART: 'ADD_TO_CART',
  REMOVE_FROM_CART: 'REMOVE_FROM_CART',
  CART_USER_LOGOUT: 'CART_USER_LOGOUT',
};

const userActionType = {
  LOGIN: 'LOGIN',
  LOGOUT: 'LOGOUT',
  UPDATE_USER: 'UPDATE_USER',
  CHANGE_PASSWORD: 'CHANGE_PASSWORD',
};

const messOrderActionType = {
  FECTH_MESS_ORDER: 'FECTH_MESS_ORDER',
  CREATE_MESS_ORDER: 'CREATE_MESS_ORDER',
  MESSORDER_USER_LOGOUT: 'MESSORDER_USER_LOGOUT',
};

export {cartActionType, userActionType, messOrderActionType};
