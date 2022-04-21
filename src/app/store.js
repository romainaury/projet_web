import { configureStore } from "@reduxjs/toolkit";
import mainReducer from "../reducers/mainReducer";
import matchReducer from "../reducers/matchReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const pReducer = persistReducer(
  {
    key: "user",
    storage: storage,
    timeout: 10
  },
  mainReducer
);

export const store = configureStore({
  reducer: {
    main: pReducer,
    match: matchReducer,
  },
  devTools: true,
});

export const persistor = persistStore(store);
