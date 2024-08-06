import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./reduers/User.reducer";
import sidenavSlice from "./reduers/SidenavReducer";
const store = configureStore({
  reducer: {
    userSlice: userSlice,
    sidenavSlice: sidenavSlice,
  },
});
export default store;
