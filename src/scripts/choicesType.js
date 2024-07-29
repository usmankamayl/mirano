import {productStore} from "./Store.js";
import {ListType} from "./ListType.jsx";

export const choicesType = () => {
    const typeChoices = document.querySelector('.filter__choices_type');
    const choicesBox = document.querySelector('.filter__choices-box_type');
    const updateTypeChoicesVisibility = () => {
        const categories = productStore.getCategories();
        choicesBox.textContent = '';
        const listType = ListType([...categories]);
        choicesBox.append(listType);
        if (categories.size) {
            typeChoices.style.display = '';
        } else {
            typeChoices.style.display = 'none';
        }

        productStore.subscribe(updateTypeChoicesVisibility);
    }

    updateTypeChoicesVisibility();
}