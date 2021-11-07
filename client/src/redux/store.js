import {configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { watcherSaga } from "./sagas/rootSaga.js";
import modelReducer from "./slices/model-slice.js";

const reducer = combineReducers({
   model: modelReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;