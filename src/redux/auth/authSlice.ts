import { createSlice } from "@reduxjs/toolkit";

export type TUser = {
  userId: string;
  email: string | undefined;
  role: string | undefined;
};

export type TInitialState = {
  user: null | TUser;
  token: null | string;
};

const initialState: TInitialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authInFo: (state, action) => {
      const { data, token } = action.payload;
      console.log(data, token);
      (state.user = data), (state.token = token);
    },
  },
});

export const { authInFo } = authSlice.actions;

export default authSlice.reducer;
