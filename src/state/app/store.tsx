import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "@/state/features/menu";
import modalReducer from "@/state/features/modal";

export const store = configureStore({
  reducer: { menu: menuReducer, modal: modalReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
