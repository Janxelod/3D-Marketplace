import {configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import { watcherSaga } from "./sagas/rootSaga";
import modelReducer from "./slices/model-slice";
import newModelReducer from "./slices/newModel-slice";
import userReducer from "./slices/user-slice";
import modelsReducer from "./slices/models-slice";

const reducer = combineReducers({
   model: modelReducer,
   newModel: newModelReducer,
   user: userReducer,
   models: modelsReducer
});

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
   reducer,
   middleware: (getDefaultMiddleware) => [...getDefaultMiddleware({thunk: false}), sagaMiddleware]
});

sagaMiddleware.run(watcherSaga);

export default store;