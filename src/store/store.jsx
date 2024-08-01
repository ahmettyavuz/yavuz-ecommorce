import {
  applyMiddleware,
  combineReducers,
  legacy_createStore as createStore,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";
import productReducer from "./reducers/productReducer";
import clientReducer from "./reducers/clientReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";

const reducers = combineReducers({
  product: productReducer,
  client: clientReducer,
  shoppingCart: shoppingCartReducer,
});

export const myStore = createStore(reducers, applyMiddleware(thunk, logger));
