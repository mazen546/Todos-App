import { configureStore } from "@reduxjs/toolkit";
import collectionsReducer from "./feature/collections/collectionsSlice";
export const store = configureStore({
  reducer: { collections: collectionsReducer },
});
