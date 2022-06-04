import {
  createStore,
  compose,
  applyMiddleware
} from 'redux';
import thunk from "redux-thunk";
import reducer from "./Employee/reducer";

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
