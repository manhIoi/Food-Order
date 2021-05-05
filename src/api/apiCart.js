import callApi from '../utils/callApi';

const callApiCart = async idUser => {
  return await callApi('get', `carts/get-one-by-user/${idUser}`);
};

const callApiAddToCart = async (idUser, food) => {
  return await callApi('put', `carts/add-to-cart/${idUser}`, food);
};

const callApiRemoveFromCart = async (idUser, food) => {
  return await callApi('put', `carts/remove-from-cart/${idUser}`, food);
};

const callApiCreateCart = async idUser => {
  return await callApi('post', 'carts/create', {_idUser: idUser});
};

export {
  callApiCart,
  callApiAddToCart,
  callApiRemoveFromCart,
  callApiCreateCart,
};
