import { createStore, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import allReducers from "../reducers";

function mainStore(preloadedState) {
  return createStore(
    allReducers,
    preloadedState,
    applyMiddleware(thunkMiddleware)
  );
}

export default mainStore;
