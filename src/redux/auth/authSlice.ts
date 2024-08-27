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
    logOut: (state) => {
      // const { data, token } = action.payload;
     
      (state.user = null), (state.token = null);
    },
  },
});

export const { authInFo ,logOut} = authSlice.actions;

export default authSlice.reducer;
