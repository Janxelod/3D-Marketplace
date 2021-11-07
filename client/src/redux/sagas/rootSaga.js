import {takeLatest} from "redux-saga/effects";

import { handleGetModel2D } from "./handlers/model";
import { getModel } from "../slices/model-slice";

export function* watcherSaga() {
   yield takeLatest(getModel.type, handleGetModel2D);
}