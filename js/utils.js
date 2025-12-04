const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (upper - lower + 1)) + lower;
};

const getRandomArrayElement = (elements) =>
  elements[getRandomInteger(0, elements.length - 1)];

export { getRandomInteger, getRandomArrayElement };
<<<<<<< HEAD
=======

>>>>>>> 8edcd188e94aea1cf4013dba35ddc81c5d4bb908
