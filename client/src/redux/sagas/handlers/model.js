import { call, put } from "redux-saga/effects";

import { requestGetModel2D, requestGetModelModel } from "../requests/model";
import { setModel } from "../../slices/model-slice";

export function* handleGetModel2D({payload}) {
   try {
      const modelResponse = yield call(requestGetModel2D, payload.id);
      const modelCommentsResponse = yield call(requestGetModelModel, payload.id);
      
      const {data: dataModel} = modelResponse;
      const {data: dataComments} = modelCommentsResponse;

      yield put(setModel({...dataModel, comments: dataComments}));
   } catch (error) {
      console.log(error);
   }
}
