import {getRandomInteger, getRandomArrayElement, getRandomNoRepeatInt} from './utils.js';

const AVATAR_COUNT = 6;
const POSTS_COUNT = 25;
const COMMENT_COUNT = 30;
const LIKE_MIN_COUNT = 15;
const LIKE_MAX_COUNT = 200;
const USED_POST_IDS = [];

const NAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат.',
  'Лица у людей на фотке перекошены.',
];

const DESCRIPTIONS = [
  'Закат над набережной.',
  'Утренний кофе и ноутбук.',
  'Вид с вершины холма.',
  'Город после дождя.',
  'Кот наблюдает в окно.',
  'Тест объектива на 50 мм.',
];

const createIdGenerator = () => {
  let lastGeneratedId = 0;

  return () => {
    lastGeneratedId += 1;
    return lastGeneratedId;
  };
};

const getCommentId = createIdGenerator();

const createMessage = () => Array.from(
  { length: getRandomInteger(1, 2) },
  () => getRandomArrayElement(MESSAGES),
).join(' ');

const createComment = () => ({
  id: getCommentId(),
  avatar: `img/avatar-${ getRandomInteger(1, AVATAR_COUNT) }.svg`,
  message: createMessage(),
  name: getRandomArrayElement(NAMES),
});

const createPicture = () => {
  const postId = getRandomNoRepeatInt(1, POSTS_COUNT, USED_POST_IDS);

  return {
    id: postId,
    url: `photos/${ postId }.jpg`,
    description: getRandomArrayElement(DESCRIPTIONS),
    likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
    comments: Array.from(
      { length: getRandomInteger(0, COMMENT_COUNT) },
      createComment,
    ),
  };
};

const createPictures = () => Array.from(
  { length: POSTS_COUNT },
  createPicture,
);

export { createPictures };
