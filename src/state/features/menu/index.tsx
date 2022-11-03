import { createSlice } from "@reduxjs/toolkit";
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
    toggleMenu(state) {
      state.menuOpen = !state.menuOpen;
    },
  },
});

export const { toggleMenu } = menuSlice.actions;
export default menuSlice.reducer;
