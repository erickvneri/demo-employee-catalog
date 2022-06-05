import thunk from "redux-thunk";
import reducer from "../store/Employee/reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

const store = configureStore({
  reducer: reducer,
  applyMiddleware: thunk,
});

const MockProvider = ({ children }) => (
  <Provider store={store}>
    {children}
  </Provider>
);

export default MockProvider;
