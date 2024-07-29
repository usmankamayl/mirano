import {cartStore} from "./Store.js";
import {renderCart} from "./renderCart.js";


export const cart = async () => {
    const headerCartButton = document.querySelector('.header__cart-button');
    const cartClose = document.querySelector('.cart__close');
    const carDate = document.querySelector('.cart__date');
    const cartEl = document.querySelector('.cart');
    const cartPriceTotal = document.querySelector('.cart__price_total');
    const toggleCart = () => {
        cartEl.classList.toggle('cart_open');

        if (cartEl.classList.contains('cart_open') && window.innerWidth > 1360) {
            cartEl.scrollIntoView({behavior: "smooth", block: "start"});
        }
    }
    await cartStore.init();
    headerCartButton.textContent = `${cartStore.getCart().length}`;
    headerCartButton.addEventListener('click', toggleCart);
    renderCart();
    cartStore.subscribe(() => {
        const cart = cartStore.getCart();
        const totalPriceValue = cart.reduce((acc, product) => acc + product.price * product.quantity, 0 );
        cartPriceTotal.innerHTML = `${totalPriceValue}&nbsp;₽`;
        headerCartButton.textContent = `${cartStore.getCart().length}`;
    })
    cartClose.addEventListener('click', () => {
        cartEl.classList.remove('cart_open');
    });

}