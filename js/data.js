import {getRandomInteger,getRandomArrayElement} from './util.js';
const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон',
];

const SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг',
];

const DESCRIPTIONS = [
  'Закат над набережной.',
  'Утренний кофе и ноутбук.',
  'Вид с вершины холма.',
  'Город после дождя.',
  'Кот наблюдает в окно.',
  'Тест объектива на 50 мм.',
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат.',
  'Лица у людей на фотке перекошены.',
];

const PHOTO_COUNT = 25;


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

// eslint-disable-next-line no-console
console.log(photos);
