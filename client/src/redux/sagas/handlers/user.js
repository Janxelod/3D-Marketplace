import {call, put} from "redux-saga/effects";

import {
   requestGetUser,
   requestGetUserSkills,
   requestGetUserModels,
   requestGetUserModelLike,
} from "../requests/user";
import {setUser, setUserModels, setUserLikes} from "../../slices/user-slice";

export function* handleGetUser({payload}) {
   try {
      const userResponse = yield call(requestGetUser, payload.id);
      const skillsResponse = yield call(requestGetUserSkills);

      const {data: userData} = userResponse;

      // This will be here temporarily until having the DB ready...
      const userSkills = userData.skills;
      userData.skills = userSkills.map((userSkill) => {
         return {
            ...userSkill,
            value: skillsResponse.data.find((skill) => userSkill.skillId === skill.id).skill,
         };
      });
      // This will be here temporarily until having the DB ready...

      yield put(setUser({...userData}));
   } catch (error) {
      console.log(error);
   }
}

export function* handleGetUserModels({payload}) {
   try {
      const userModelsResponse = yield call(requestGetUserModels, payload.id);
      const {data: userModelsData} = userModelsResponse;

      yield put(setUserModels([...userModelsData]));
   } catch (error) {
      console.log(error);
   }
}

export function* handleGetUserLikes({payload}) {
   try {
      const {userLikes} = payload;

      const userLikesData = [];
      // This will be here temporarily until having the DB ready...
      for (const modelLiked of userLikes) {
         const modelLikedResponse = yield call(requestGetUserModelLike, modelLiked.imageId);
         const {data: modelLikedData} = modelLikedResponse;

         userLikesData.push(modelLikedData);
      }
      // This will be here temporarily until having the DB ready...

      yield put(setUserLikes([...userLikesData]));
   } catch (error) {
      console.log(error);
   }
}
