import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { UserType } from "@/types";
interface UserState {
  genders: Array<string>;
  user: UserType;
}

const initialState: UserState = {
  genders: [],
  user: {} as UserType,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setGenders(state, action: PayloadAction<Array<string>>) {
      state.genders = action.payload;
    },
    setUser(state, action: PayloadAction<UserType>) {
      state.user = action.payload;
    },
  },
});

export const { setGenders, setUser } = userSlice.actions;
export default userSlice.reducer;
