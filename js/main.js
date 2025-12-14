import { renderPictures } from './pictures.js';
import './big-picture-modal.js';
import './image-editing.js';
import './image-scale.js';
import { getData } from './api.js';
import { showErrorMessage } from './form-validation.js';

getData()
  .then((data) => {
    renderPictures(data);
  })
  .catch((error) => {
    showErrorMessage(error.message);
  });
