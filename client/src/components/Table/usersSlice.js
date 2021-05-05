import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAllUsers",
  async () => {
    const response = await fetch("http://localhost:8080/users");
    return response.json();
  }
);

export const createUser = createAsyncThunk(
  "users/createUser",
  async (userData) => {
    console.log(userData);
    const response = await fetch("http://localhost:8080/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "Content-Type": "application/json" },
    });
    return response.data;
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {
    putUser(state, action) {
      state.users.push(action.payload);
    },
  },
  extraReducers: {
    [fetchAllUsers.fulfilled]: (state, action) => {
      state.users.push(action.payload);
    },
    [createUser.fulfilled]: (state, action) => {
      // do nothing
    },
  },
});

export const { putUser } = usersSlice.actions;
export default usersSlice.reducer;
