
import { createPictures } from './const.js';
import { onPhotoMiniatureClick } from './big-picture-modal.js';

const createThumbnailElement = (photoData) => {
  const template = document.querySelector('#picture');
  const thumbnail = template.content.querySelector('.picture').cloneNode(true);

  const imgElement = thumbnail.querySelector('.picture__img');
  imgElement.src = photoData.url;
  imgElement.alt = photoData.description;

  thumbnail.querySelector('.picture__likes').textContent = photoData.likes;
  thumbnail.querySelector('.picture__comments').textContent = photoData.comments.length;

  thumbnail.dataset.thumbnailId = photoData.id;

  thumbnail.addEventListener('click', (evt) => {
    evt.preventDefault();
    onPhotoMiniatureClick(photoData);
  });

  return thumbnail;
};

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
export const pictures = createPictures();

const pictureList = document.querySelector('.pictures');
const pictureListFragment = document.createDocumentFragment();

pictures.forEach(({url, description, likes, comments}) => {
  const pictureElement = pictureTemplate.cloneNode(true);
  const imgElement = pictureElement.querySelector('.picture__img');
  imgElement.src = url;
  imgElement.alt = description;
  pictureElement.querySelector('.picture__likes').textContent = likes;
  pictureElement.querySelector('.picture__comments').textContent = comments.length;
  pictureListFragment.append(pictureElement);
});

pictureList.append(pictureListFragment);
