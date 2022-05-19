import packageJson from "../package.json";

export const ENV = {
  VERSION: packageJson.version || "",
  API_PRODUCTS: process.env.REACT_APP_API_PRODUCTS ?? "",
};
