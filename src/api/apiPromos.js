import callApi from '../utils/callApi';

const callApiPromos = async () => {
  const promos = await callApi('get', 'promos');

  const listPromos = await promos.data.map(async (promo, index) => {
    const listRestaurant = await callApi(
      'get',
      `restaurants/getRes/promo/${promo._id}`,
    );

    const result = {
      ...promo,
      listRestaurant: listRestaurant.data,
    };
    return result;
  });

  const result = await Promise.all(listPromos);
  return result;
};

export {callApiPromos};
