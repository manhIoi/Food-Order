import callApi from '../utils/callApi';

const callApiMessOrder = async idUser => {
  const body = await callApi('get', `mess-order/get-by-idUser/${idUser}`);
  console.log(body.data);
  return body.data;
};

const callApiCreateMessOrder = async data => {
  const body = await callApi('post', `mess-order/create`, data);
  return body.data;
};

export {callApiMessOrder, callApiCreateMessOrder};
