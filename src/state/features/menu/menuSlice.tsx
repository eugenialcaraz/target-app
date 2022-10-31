import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// This can also be directly a bool
interface MenuState {
  menuOpen: boolean;
  activeLink: string;
}

const initialState: MenuState = {
  menuOpen: false,
  activeLink: "",
};

const menuSlice = createSlice({
  name: "menu",
  initialState,
  reducers: {
    openMenu(state) {
      state.menuOpen = true;
    },
    closeMenu(state) {
      state.menuOpen = false;
    },
    setActiveLink(state, action: PayloadAction<string>) {
      state.activeLink = action.payload;
    },
  },
});

export const { openMenu, closeMenu, setActiveLink } = menuSlice.actions;
export default menuSlice.reducer;
