import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import customFetch from "../../utils/Axios";
// import { toast } from "react-toastify";

const initialState = {
  isLoading: false,
  user: null,
};

export const registerUser = createAsyncThunk(
  "user/registerUser",
  // eslint-disable-next-line no-unused-vars
  async (user, thunkAPI) => {
    try {
      const resp = await customFetch.post("/auth/testingRegister", user);
      console.log(resp);
    } catch (error) {
      console.log(error.response);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/loginUser",
  // eslint-disable-next-line no-unused-vars
  async (user, thunkAPI) => {
    console.log(`Login User : ${JSON.stringify(user)}`);
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
});

export default userSlice.reducer;
