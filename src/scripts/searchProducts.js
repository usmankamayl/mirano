import {fetchProducts} from "./API.js";
import {callbackWithPreload} from "./preload.js";

export const searchProducts = () => {
    const headerForm = document.querySelector('.header__form');
    const goodsTitle = document.querySelector('.goods__title');
    const goodsSection = document.querySelector('.goods');
    headerForm.addEventListener('submit', (e) => {
       e.preventDefault();
       const formData = new FormData(headerForm);
       const searchQuery = formData.get('search').trim();
       if (searchQuery) {
           goodsTitle.textContent = 'Результат поиска';
           callbackWithPreload(goodsSection, fetchProducts, {search: searchQuery})
       }
    });
};