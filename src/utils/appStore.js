import { configureStore } from "@reduxjs/toolkit";
import currentStateSlice from "./currentStateSlice";


const appStore = configureStore({
  reducer: {
    currentState: currentStateSlice,
  },
});

export default appStore;