import callApi from '../utils/callApi';

const callApiMessOrder = async idUser => {
  const body = await callApi('get', `mess-order/get-by-idUser/${idUser}`);
  console.log(body.data);
  return body.data;
};

export {callApiMessOrder};
