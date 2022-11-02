import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    handleModal(state, action: PayloadAction<boolean>) {
      state.modalOpen = action.payload;
    },
  },
});

export const { handleModal } = modalSlice.actions;
export default modalSlice.reducer;
