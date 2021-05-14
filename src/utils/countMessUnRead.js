const countMessUnRead = messsOrder => {
  let result = 0;
  messsOrder.forEach(mess => {
    if (!mess.isRead) {
      result += 1;
    }
  });
  return result;
};

export default countMessUnRead;
