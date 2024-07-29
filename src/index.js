import '@/scss/index.scss';
import {headerFixer} from "@/scripts/headerFixer.js";
import {choices} from "@/scripts/choices.js";
import {debounce} from "@/scripts/debounce.js";
import {cart} from "./scripts/cart.js";
import {renderProducts} from "@/scripts/renderProducts.js";
import {fetchProducts} from "./scripts/API.js";
import {choicesType} from "./scripts/choicesType.js";
import {filterProducts} from "./scripts/filterProducts.js";
import {searchProducts} from "./scripts/searchProducts.js";
import {orderController} from "./scripts/orderController.js";


const init = () => {
    headerFixer();
    choices();
    choicesType();
    cart();
    filterProducts();
    renderProducts();
    searchProducts();
    orderController();
}

document.addEventListener('DOMContentLoaded', init)
