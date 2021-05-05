import rootApi from '../../api';
import * as Types from '../types';

const fecthCart = idUser => async dispatch => {
  try {
    const {data} = await rootApi.callApiCart(idUser);
    console.log(data);
    if (data) {
      return dispatch({
        type: Types.cartActionType.FETCH_CART,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const createCart = idUser => async dispatch => {
  try {
    const {data} = await rootApi.callApiCreateCart(idUser);
    console.log(data);
    if (data) {
      return dispatch({
        type: Types.cartActionType.CREATE_CART,
        payload: data,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const addToCart = (idUser, food) => async dispatch => {
  try {
    const {data} = await rootApi.callApiAddToCart(idUser, food);
    if (data) {
      return dispatch({
        type: Types.cartActionType.ADD_TO_CART,
        payload: food,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const removeFromCart = (idUser, food) => async dispatch => {
  try {
    const {data} = await rootApi.callApiRemoveFromCart(idUser, food);
    console.log(data);
    if (data) {
      return dispatch({
        type: Types.cartActionType.REMOVE_FROM_CART,
        payload: food,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export {fecthCart, addToCart, removeFromCart, createCart};
