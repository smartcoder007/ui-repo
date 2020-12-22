import { applyMiddleware, createStore, combineReducers } from "redux";
import thunk from "redux-thunk";
import { AppReducer } from "./reducers/app-reducer";

const rootReducer = combineReducers({
  AppReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(thunk),
  window.__REDUX_DEVTOOlS_EXTENSION__ && window.__REDUX_DEVTOOlS_EXTENSION__()
);

export { store };
