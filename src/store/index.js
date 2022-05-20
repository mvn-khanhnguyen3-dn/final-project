import { configureStore } from "@reduxjs/toolkit";
import countUser from "./countUser";

export default configureStore({
  reducer: {
    count: countUser,
  },
});
