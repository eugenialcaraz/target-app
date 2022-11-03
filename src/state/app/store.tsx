import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "../features/menu/menuSlice";
import modalReducer from "@/state/features/modal";
import userReducer from "../features/user/userSlice";

export const store = configureStore({
  reducer: { menu: menuReducer, modal: modalReducer, user: userReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
