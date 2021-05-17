import callApi from '../utils/callApi';

const callApiBanner = async () => {
  const body = await callApi('get', 'banners');
  return body.data;
};

export {callApiBanner};
