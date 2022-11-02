import { createSlice, PayloadAction } from "@reduxjs/toolkit";
interface MenuState {
  menuOpen: boolean;
}

const initialState: MenuState = {
  menuOpen: false,
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    handleMenu(state, action: PayloadAction<boolean>) {
      state.menuOpen = action.payload;
    },
  },
});

export const { handleMenu } = menuSlice.actions;
export default menuSlice.reducer;
