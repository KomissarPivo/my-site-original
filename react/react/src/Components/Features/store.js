import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../Features/ProfileSlice";
import filterReducer from "../Filters/storeF"
export let store = configureStore({
  reducer: {
    profile: profileReducer,
    filter: filterReducer,
  },
});
