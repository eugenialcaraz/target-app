import { createSlice } from "@reduxjs/toolkit";

interface ModalState {
  modalOpen: boolean;
}

const initialState: ModalState = {
  modalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.modalOpen = !state.modalOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
