import { createSlice } from "@reduxjs/toolkit";

const initialModelState = {
   model2D: undefined,
};

const modelSlice = createSlice({
   name: "model2D",
   initialState: {initialModelState},
   reducers: {
      getModel(state, action) {},
      setModel(state, action) {
         return { ...state, model2D: action.payload };
      },
   },
});

export const { getModel, setModel } = modelSlice.actions;

export default modelSlice.reducer;
