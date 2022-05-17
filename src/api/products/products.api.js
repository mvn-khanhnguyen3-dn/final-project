import { ENDPOINTS } from "../endpoints";
import { api } from "../api";

export const apiProductsGetList = (data) => {
  return api.get(ENDPOINTS.products, data);
};

