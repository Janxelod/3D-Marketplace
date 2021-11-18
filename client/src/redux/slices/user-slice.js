import {createSlice} from "@reduxjs/toolkit";

const initialUserState = {
   userData: null,
   modelsData: [],
   likesData: []
};

const userSlice = createSlice({
   name: "user",
   initialState: {...initialUserState},
   reducers: {
      getUser(state, action) {},
      getUserModels(state, action) {},
      getUserLikes(state, action) {},
      setUser(state, action) {
         return {...state, userData: action.payload};
      },
      setUserModels(state, action) {
         return {...state, modelsData: action.payload};
      },
      setUserLikes(state, action) {
         return {...state, likesData: action.payload};
      }
   },
});

export const {getUser, getUserModels, getUserLikes, setUser, setUserModels, setUserLikes} = userSlice.actions;

export default userSlice.reducer;