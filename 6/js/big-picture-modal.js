import { isEscapeKey } from './utils.js';

const bigPicture = document.querySelector('.big-picture');
const closeButton = bigPicture.querySelector('.big-picture__cancel');

const bigImage = bigPicture.querySelector('.big-picture__img img');
const captionElement = bigPicture.querySelector('.social__caption');
const likesCountElement = bigPicture.querySelector('.likes-count');
const commentsCountElement = bigPicture.querySelector('.comments-count');

const commentsListElement = bigPicture.querySelector('.social__comments');
const commentsCountBlock = bigPicture.querySelector('.social__comment-count');
const commentsLoaderButton = bigPicture.querySelector('.comments-loader');

const pageBody = document.body;

const createCommentElement = ({ avatar, name, message }) => {
  const li = document.createElement('li');
  li.classList.add('social__comment');

  const img = document.createElement('img');
  img.classList.add('social__picture');
  img.src = avatar;
  img.alt = name;
  img.width = 35;
  img.height = 35;

  const text = document.createElement('p');
  text.classList.add('social__text');
  text.textContent = message;

  li.append(img, text);

  return li;
};

const renderComments = (comments) => {
  commentsListElement.innerHTML = '';

  const fragment = document.createDocumentFragment();

  comments.forEach((comment) => {
    fragment.appendChild(createCommentElement(comment));
  });

  commentsListElement.appendChild(fragment);
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeBigPicture();
  }
};

const openBigPicture = (photo) => {
  bigImage.src = photo.url;
  bigImage.alt = photo.description;

  captionElement.textContent = photo.description;
  likesCountElement.textContent = photo.likes;
  commentsCountElement.textContent = photo.comments.length;

  renderComments(photo.comments);

  commentsCountBlock.classList.add('hidden');
  commentsLoaderButton.classList.add('hidden');

  bigPicture.classList.remove('hidden');
  pageBody.classList.add('modal-open');

  document.addEventListener('keydown', onDocumentKeydown);
};

function closeBigPicture() {
  bigPicture.classList.add('hidden');
  pageBody.classList.remove('modal-open');

  commentsCountBlock.classList.remove('hidden');
  commentsLoaderButton.classList.remove('hidden');

  document.removeEventListener('keydown', onDocumentKeydown);
}

closeButton.addEventListener('click', () => {
  closeBigPicture();
});

export const onPhotoMiniatureClick = (photo) => {
  openBigPicture(photo);
};
