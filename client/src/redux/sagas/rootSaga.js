import {takeLatest} from "redux-saga/effects";

import {getModel} from "../slices/model-slice";
import {getUser, getUserModels, getUserLikes} from "../slices/user-slice";
import {getModels} from "../slices/models-slice";

import {handleGetModel2D} from "./handlers/model";
import {handleGetUser, handleGetUserModels, handleGetUserLikes} from "./handlers/user";
import {handleGetModels} from "./handlers/models";

export function* watcherSaga() {
   yield takeLatest(getModel.type, handleGetModel2D);

   yield takeLatest(getUser.type, handleGetUser);
   yield takeLatest(getUserModels.type, handleGetUserModels);
   yield takeLatest(getUserLikes.type, handleGetUserLikes);

   yield takeLatest(getModels.type, handleGetModels);
}
