import { getRandomInteger, getRandomArrayElement } from './utils.js';
import { NAMES, SURNAMES, DESCRIPTIONS, MESSAGES, PHOTO_COUNT } from './consts.js';

//создаём случайное сообщение
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

//создаём описание одной фотографии
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

//массив из 25 фотографий
const photos = Array.from({ length: PHOTO_COUNT }, (_, i) =>
  createPhoto(i + 1)
);
export { photos };
