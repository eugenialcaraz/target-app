import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export enum ModalStatus {
  Default,
  Success,
  Error,
}
interface ModalState {
  modalOpen: boolean;
  modalStatus: ModalStatus;
}

const initialState: ModalState = {
  modalOpen: false,
  modalStatus: ModalStatus.Default,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    toggleModal(state) {
      state.modalOpen = !state.modalOpen;
    },
    handleModalStatus(state, action: PayloadAction<ModalStatus>) {
      state.modalStatus = action.payload;
    },
  },
});

export const { toggleModal, handleModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
