import {fetchProducts} from "./API.js";
import {debounce} from "./debounce.js";
import {callbackWithPreload} from "./preload.js";

export const filterProducts = () => {
    const filterForm = document.querySelector('.filter__form');
    const goodsTitle = document.querySelector('.goods__title');
    const goodsSection = document.querySelector('.goods');
    const applyFilters = () => {
        const formData = new FormData(filterForm);
        const type = formData.get('type');
        const minPrice = formData.get('minPrice');
        const maxPrice = formData.get('maxPrice');
        const params = {};

        if (type) params.type = type;
        if (minPrice) params.minPrice = minPrice;
        if (maxPrice) params.maxPrice = maxPrice;
        callbackWithPreload(goodsSection, fetchProducts, params);
    };

    const applyFiltersPrice = debounce(applyFilters, 500);

    applyFilters();
    filterForm.addEventListener('input', evt => {
        const target = evt.target;

        if (target.name === 'type') {
            goodsTitle.textContent = target.labels[0].textContent;
            filterForm.minPrice.value = '';
            filterForm.maxPrice.value = '';
            applyFiltersPrice();
            return;
        }

        if (target.name === 'minPrice' || target.name === 'maxPrice') {
            applyFiltersPrice();
        }
    })
}