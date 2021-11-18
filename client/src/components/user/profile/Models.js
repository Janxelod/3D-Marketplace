import React, {useState, useImperativeHandle} from "react";
import {useDispatch, useSelector} from "react-redux";

import {getUserModels, getUserLikes} from "../../../redux/slices/user-slice";
import ModelCardsContainer from "../../2d-models/collectionPage/ModelCardsContainer";

import CSSProperties from "./CssVariables";

const Models = React.forwardRef((props, ref) => {
   const dispatch = useDispatch();

   const userModels = useSelector((state) => state.user.modelsData);
   const userLikedModels = useSelector((state) => state.user.likesData);

   const [currentMode, setCurrentMode] = useState();
   
   const showUserModels = (userId) => {
      dispatch(getUserModels({test: "hi", id: userId}));
      setCurrentMode("UserModels");
   };
   
   const showUserLikes = (imageLikes) => {
      dispatch(getUserLikes({test: "hi", userLikes: imageLikes}));
      setCurrentMode("UserModelLikes");
   };
   
   const reset = () => {
      setCurrentMode("Summary");
   };
   
   useImperativeHandle(ref, () => {
      return {
         showUserModels,
         showUserLikes,
         reset,
      };
   });
   
   const models = (() => {
      switch (currentMode) {
         case "UserModels":
            return userModels;
         case "UserModelLikes":
            return userLikedModels;
      }
      return [];
   })();

   return (
      <React.Fragment>
         {models.length > 0 && (
            <ModelCardsContainer models={models} cssProperties={CSSProperties} />
         )}
      </React.Fragment>
   );
});

export default Models;
