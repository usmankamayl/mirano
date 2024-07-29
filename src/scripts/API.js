import {productStore} from "./Store.js";
/**
 *  - `/api/products?type=bouquets`
 *   - `/api/products?type=toys`
 *   - `/api/products?type=postcards`
 *   - Фильтрация: `/api/products?category=toys&minPrice=500`
 *   - Список ID: `/api/products?list=1,2,3`
 * */

const formatSearchParams = params => {
    if (Object.keys(params).length === 0) {
        return '';
    }

    const searchParams = new URLSearchParams();
    Object.entries(params).forEach(([key, value]) => {
        searchParams.append(key, value.toString())
    });

    return `?${searchParams.toString()}`;
}
export const API_URL = 'https://mirano-api-tuhm.onrender.com/';
export const fetchProducts = async (params = {}) => {
  try {
      const response = await fetch(`${API_URL}/api/products${formatSearchParams(params)}`);

      if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
      }
      const products = await response.json();
      productStore.setProducts(products);
  } catch (error) {
      console.error(`Ошибка при получении данных: ${error}`);
      return [];
  }
}

export const sendOrder = async (orderData) => {
    try {
        const response = await fetch(`${API_URL}/api/orders`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderData),
        });

        if (!response.ok) {
            throw new Error(
                `Ошибка при заказе, попробуйте позже! :: ${response.status}`,
            );
        }
        return await response.json();
    } catch (error) {
        console.error(error);
    }
};
