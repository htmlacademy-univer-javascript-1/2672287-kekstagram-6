import { getRandomInteger, getRandomArrayElement } from './utils.js';
<<<<<<< HEAD
=======

>>>>>>> 8edcd188e94aea1cf4013dba35ddc81c5d4bb908
import { NAMES, SURNAMES, DESCRIPTIONS, MESSAGES, PHOTO_COUNT } from './const.js';

const createMessage = () => {
  const message = [getRandomArrayElement(MESSAGES)];
  if (Math.random() < 0.5) {
    message.push(getRandomArrayElement(MESSAGES));
  }
  return message.join(' ');
};

let commentId = 1;
const createComment = () => ({
  id: commentId++,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: `${getRandomArrayElement(NAMES)} ${getRandomArrayElement(SURNAMES)}`,
});

const createPhoto = (id) => ({
  id,
  url: `photos/${id}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15, 200),
  comments: Array.from(
    { length: getRandomInteger(0, 30) },
    createComment
  ),
});

<<<<<<< HEAD
const photos = () => Array.from({ length: PHOTO_COUNT }, (_, i) =>
=======
const photos = Array.from({ length: PHOTO_COUNT }, (_, i) =>
>>>>>>> 8edcd188e94aea1cf4013dba35ddc81c5d4bb908
  createPhoto(i + 1)
);
export { photos };
