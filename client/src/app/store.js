import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "../components/Table/usersSlice";

export default configureStore({
  reducer: {
    users: usersReducer,
  },
});
