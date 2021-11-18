import { call, put } from "redux-saga/effects";

import { requestGetModels } from "../requests/models";
import { setModels } from "../../slices/models-slice";

export function* handleGetModels() {
   try {
      const modelsResponse = yield call(requestGetModels);
      
      const {data: modelsData} = modelsResponse;

      yield put(setModels([...modelsData]));
   } catch (error) {
      console.log(error);
   }
}
