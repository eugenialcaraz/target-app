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
    handleModal(state, action: PayloadAction<boolean>) {
      state.modalOpen = action.payload;
    },
    handleModalStatus(state, action: PayloadAction<ModalStatus>) {
      state.modalStatus = action.payload;
    },
  },
});

export const { handleModal, handleModalStatus } = modalSlice.actions;
export default modalSlice.reducer;
