import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import matchReducer from "../reducers/matchReducer";

export const store = configureStore({
  reducer: {
    main: mainReducer,
    match: matchReducer,
  },
  devTools: true,
});