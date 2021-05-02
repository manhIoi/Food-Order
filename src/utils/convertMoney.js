const convertMoney = (money, option) => {
  if (option == 'toNumber') {
    const result = Number(money.replace('.', ''));
    return result;
  } else {
    return money.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1.');
  }
};

export default convertMoney;
