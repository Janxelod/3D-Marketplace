import { createSlice } from "@reduxjs/toolkit";

const initialModelsState = {
   modelsData: [],
};

const modelsSlice = createSlice({
   name: "models",
   initialState: {...initialModelsState},
   reducers: {
      getModels(state, action) {},
      setModels(state, action) {
         return { ...state, modelsData: action.payload };
      },
   },
});

export const { getModels, setModels } = modelsSlice.actions;

export default modelsSlice.reducer;
