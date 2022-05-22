import { ENDPOINTS } from "../endpoints";
import { api } from "../api";

export const apiUsersGetList = (data) => {
  return api.get(ENDPOINTS.users, data);
};
export const apiUsersPostList = (data) => {
  return api.post(ENDPOINTS.users, data);
};
