import thunk from "redux-thunk";
import reducer from "./Employee/reducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: reducer,
  applyMiddleware: thunk,
});

export default store;
