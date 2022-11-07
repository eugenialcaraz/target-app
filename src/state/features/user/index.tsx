import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type GenderType = {
  option: string;
};

interface UserState {
  genders: Array<string>;
  username: string;
}

const initialState: UserState = {
  genders: [],
  username: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGenders(state, action: PayloadAction<Array<string>>) {
      state.genders = action.payload;
    },
    setUsername(state, action: PayloadAction<string>) {
      state.username = action.payload;
    },
  },
});

export const { setGenders, setUsername } = userSlice.actions;
export default userSlice.reducer;
