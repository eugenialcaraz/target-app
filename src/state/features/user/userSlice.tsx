import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenderType = {
  option: string;
};

interface UserState {
  genders: Array<GenderType>;
}

const initialState: UserState = {
  genders: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGenders(state, action: PayloadAction<Array<GenderType>>) {
      state.genders = action.payload;
    },
  },
});

export const { setGenders } = userSlice.actions;
export default userSlice.reducer;
