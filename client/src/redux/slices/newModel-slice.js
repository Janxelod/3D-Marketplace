import {createSlice} from "@reduxjs/toolkit";

export const initialModelState = {
   newModel: null,
   url: null,
   title: "",
   fileName: "",
};

const newModelSlice = createSlice({
   name: "newModel2D",
   initialState: {...initialModelState},
   reducers: {
      setNewModel(state, action) {
         return {...state, ...action.payload};
      },
      resetNewModel() {
         return {...initialModelState};
      },
      updateNewModel(state, action) {
         const payload = action.payload;
         return {...state, newModel: payload, title: payload.name};
      },
   },
});

export const {setNewModel, updateNewModel, resetNewModel} = newModelSlice.actions;

export default newModelSlice.reducer;
