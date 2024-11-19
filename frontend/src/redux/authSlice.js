import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
  },
  reducers: {
    //actions
    setUser: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = authSlice.actions;

export default authSlice.reducer;
