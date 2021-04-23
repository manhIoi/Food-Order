const idRandom = (name, length) => {
  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split(
    '',
  );

  if (!length) {
    length = Math.floor(Math.random() * chars.length);
  }

  var str = name;
  for (var i = 0; i < length; i++) {
    str += chars[Math.floor(Math.random() * chars.length)];
  }
  return str;
};

export default idRandom;
