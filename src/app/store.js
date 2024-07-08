import { configureStore } from "@reduxjs/toolkit";
import { movieSlice } from "../features/movies/movieSlice";
import { userSlice } from "../features/users/userSlice";




export const store = configureStore({
  reducer: {
    [movieSlice.name]: movieSlice.reducer,
    [userSlice.name]: userSlice.reducer
  }
});
