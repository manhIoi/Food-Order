import rootApi from '../../api/index';
import * as Types from '../types';

const fecthMessOrder = idUser => async dispatch => {
  try {
    const body = await rootApi.callApiMessOrder(idUser);
    console.log(body);

    if (body) {
      return dispatch({
        type: Types.messOrderActionType.FECTH_MESS_ORDER,
        payload: body,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const createMessOrder = newMessOrder => async dispatch => {
  try {
    const body = await rootApi.callApiCreateMessOrder(newMessOrder);
    console.log(body);
    if (body) {
      return dispatch({
        type: Types.messOrderActionType.CREATE_MESS_ORDER,
        payload: body,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const readMessOrder = idMess => async dispatch => {
  try {
    const body = await rootApi.callApiReadMessOrder(idMess);
    console.log(body);
    if (body._id) {
      return dispatch({
        type: Types.messOrderActionType.READ_MESS_ORDER,
        payload: body,
      });
    }
  } catch (error) {
    console.log(error.message);
  }
};

export {fecthMessOrder, createMessOrder, readMessOrder};
