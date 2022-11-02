import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu";
import modalReducer from "../features/modal";

export const store = configureStore({
  reducer: { menu: menuReducer, modal: modalReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
