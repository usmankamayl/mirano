import {ProductCard} from "./ProductCard.jsx";
import {productStore} from "./Store.js";


export const renderProducts = async () => {
    const goodList = document.querySelector('.goods__list');

    const updateList = () => {
        const products = productStore.getProducts();
        goodList.innerHTML = '';

        if (products.length === 0) {
            const messageItem = document.createElement('li');
            messageItem.textContent = 'Товары не найдены';
            messageItem.classList.add('goods__no-product');
            goodList.append(messageItem);
            return;
        }
        products.forEach(product => {
            const productCard = ProductCard(product);
            goodList.append(productCard);
        })
    }
    productStore.subscribe(updateList);
    updateList();
}