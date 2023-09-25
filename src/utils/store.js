import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, userReducer } from "../features/reducers";

const store = configureStore({
   reducer: {
      auth: loginReducer,
      user: userReducer,
   },
});

export default store;
