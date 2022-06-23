/*
 * Created Date: Wednesday June 18th 2022
 * Author: Amir Dorgham
 * -----
 * Last Modified: Saturday, June 18th 2022, 12:09:51 pm
 * Modified By: Amir Dorgham
 * -----
 */

import { createStore, applyMiddleware, compose } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const persistConfig = {
  key: "root",
  storage,
};
const middleware = [thunk];
if (process.env.NODE_ENV !== "production") {
  middleware.push(createLogger());
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const configureStore = () => {
  let store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );
  let persistor = persistStore(store);

  return { store, persistor };
};

export default configureStore;
