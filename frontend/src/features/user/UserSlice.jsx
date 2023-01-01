import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/Axios";
import { toast } from "react-toastify";
import {
  addUserToLocalStorage,
  getUserFromLocalStorage,
} from "../../utils/LocalStorage";

const initialState = {
  isLoading: false,
  userInfo: getUserFromLocalStorage(),
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/api/auth/register", user);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log("ERROR: response.status: " + error.response.status);
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/api/auth/login", user);
      console.log(resp);
      return resp.data;
    } catch (error) {
      console.log("ERROR: response.status: " + error.response.status);
      console.log(error.response.data);
      return thunkAPI.rejectWithValue(error.response.data);
    }
  }
);
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registerUser.fulfilled, (state, { payload }) => {
        const { userInfo } = payload;
        state.isLoading = false;
        state.user = userInfo;
        addUserToLocalStorage(userInfo);
        toast.success(`Hello there ${userInfo.name}.`);
      })
      .addCase(registerUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        const { error } = payload;
        toast.error(error);
      })
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, { payload }) => {
        const { userInfo } = payload;
        state.isLoading = false;
        state.user = userInfo;
        addUserToLocalStorage(userInfo);
        toast.success(`Welcome back ${userInfo.name}!`);
      })
      .addCase(loginUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        const { error } = payload;
        toast.error(error);
      });
  },
});

export default userSlice.reducer;
