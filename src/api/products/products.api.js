import { ENDPOINTS } from "../endpoints";
import { api } from "../api";

export const apiProductsGetList = (data) => {
  return api.get(ENDPOINTS.products, data);
};
export const apiCreateProductsGetList = (data) => {
  return api.post(ENDPOINTS.products, data);
};
