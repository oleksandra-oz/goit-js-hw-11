import { fetchImages } from './js/pixabay-api';
import { renderImages } from './js/render-functions';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const form = document.querySelector('.form');
const list = document.querySelector('.list');
const loading = document.querySelector('.loader');

form.addEventListener('submit', submitForm);

function submitForm(evt) {
    evt.preventDefault();
    loading.style.display = 'inline-block';
    list.innerHTML = '';

    if (evt.currentTarget.elements.search.value.trim() === ''){
        loading.style.display = 'none';
        clearGallery();
        return;
    }

    const value = evt.currentTarget.elements.search.value.trim();

    fetchImages(value)
        .then(data => {
            if (data.total === 0) {
                loading.style.display = 'none';
                clearGallery();
            }
            
            loading.style.display = 'none';

            list.insertAdjacentHTML('afterbegin', renderImages(data.hits));

            initSimpleLightbox();
    })
.catch(error => {
      loading.style.display = 'none';
      iziToast.error({
        position: 'topRight',
        message: error.message,
        maxWidth: 432,
      });
    });
}

function clearGallery() {
  iziToast.error({
    position: 'topRight',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
    maxWidth: 432,
  });
  list.innerHTML = '';
}

function initSimpleLightbox() {
  const lightbox = new SimpleLightbox('.list-item', {
    captions: true,
    captionsData: 'alt',
    captionDelay: 150,
  });

  lightbox.refresh();

}