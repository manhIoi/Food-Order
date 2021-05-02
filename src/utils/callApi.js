import axios from 'axios';
import END_POINT from '../constants/apiUrl';

const callApi = (method, endpoint, body) => {
  return axios({
    method: method,
    url: `${END_POINT}/${endpoint}`,
    data: body,
  }).catch(err => console.log(err.message));
};

export default callApi;
