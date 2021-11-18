import {useRouteMatch} from "react-router";

export const ProfileModeEnum = {
   SUMMARY: 'SUMMARY',
   MODELS: 'MODELS',
   LIKES: 'LIKES',
   NONE: 'NONE'
};

const useUserRouteMatch = () => {
   const matchModelsRoute = useRouteMatch("/user/:uId/models");
   const matchLikesRoute = useRouteMatch("/user/:uId/likes");
   const matchSummaryRoute = useRouteMatch("/user/:uId");

   let currentMode = ProfileModeEnum.NONE;

   if(matchSummaryRoute) {
      currentMode =  ProfileModeEnum.SUMMARY;
   }

   if(matchLikesRoute) {
      currentMode =  ProfileModeEnum.LIKES;
   }

   if(matchModelsRoute) {
      currentMode =  ProfileModeEnum.MODELS;
   }

   return {
      mode: currentMode
   }
};

export default useUserRouteMatch;