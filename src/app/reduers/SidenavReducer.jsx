import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  data: {
    New_Feed: [
      {
        icon: <i class="ri-fire-fill"></i>,
        link: "Trending",
      },
      {
        icon: <i class="ri-bard-fill"></i>,
        link: "Popular",
      },
      {
        icon: <i class="ri-movie-2-fill"></i>,
        link: "Movies",
      },
      {
        icon: <i class="ri-tv-2-fill"></i>,
        link: "Tv_Show",
      },
      {
        icon: <i class="ri-team-fill"></i>,
        link: "People",
      },
    ],
  },
  data2: {
    Website_information: [
      {
        icon: <i class="ri-error-warning-fill"></i>,
        link: "About",
      },
      {
        icon: <i class="ri-phone-fill"></i>,
        link: "Phone",
      },
    ],
  },
};
const sidenavSlice = createSlice({
  name: "sidenav",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
  },
});
export default sidenavSlice.reducer;
export const { setData } = sidenavSlice.actions;
