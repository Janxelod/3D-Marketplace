import {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import {useParams} from "react-router";

import Button from "../../components/ui/Button";
import {getUser} from "../../redux/slices/user-slice";
import UserHeader from "../../components/user/profile/Header";
import UserSummary from "../../components/user/profile/Summary";
import UserModels from "../../components/user/profile/Models";

import useUserRouteMatch, {ProfileModeEnum} from "../../hooks/user/useUserRouteMatch";

import classes from "./UserPage.module.css";

const UserPage = () => {
   const user = useSelector((state) => state.user.userData);
   const dispatch = useDispatch();

   const params = useParams();
   const userId = params.uId;
   const {mode} = useUserRouteMatch();

   const modelsRef = useRef();
   const [isSummary, setIsSummary] = useState(true);

   const imagesAmount = 6; //temp

   useEffect(() => {
      dispatch(getUser({test: "hi", id: userId}));
   }, []);

   const showSummaryHandler = () => {
      setIsSummary(true);
      modelsRef.current?.reset();
   };

   const showImagesHandler = () => {
      setIsSummary(false);
      modelsRef.current?.showUserModels(userId);
   };

   const showLikesHandler = () => {
      setIsSummary(false);
      modelsRef.current?.showUserLikes(user.imageLikes);
   };

   const renderButtons = (userData) => {
      const likesAmount = userData.imageLikes?.length || 0;
      const summaryPath = `/user/${userId}`;
      const modelsPath = `/user/${userId}/models`;
      const likesPath = `/user/${userId}/likes`;
      return (
         <div className={classes.contentButtons}>
            <Link to={summaryPath}>
               <Button name="Summary" isSelected={mode === ProfileModeEnum.SUMMARY} />
            </Link>
            <Link to={modelsPath}>
               <Button
                  name={`${imagesAmount} Images`}
                  isSelected={mode === ProfileModeEnum.MODELS}
               />
            </Link>
            <Link to={likesPath}>
               <Button name={`${likesAmount} Likes`} isSelected={mode === ProfileModeEnum.LIKES} />
            </Link>
         </div>
      );
   };

   useEffect(() => {
      if (user) {
         switch (mode) {
            case ProfileModeEnum.SUMMARY:
               showSummaryHandler();
               break;
            case ProfileModeEnum.MODELS:
               showImagesHandler();
               break;
            case ProfileModeEnum.LIKES:
               showLikesHandler();
               break;
         }
      }
   }, [mode, user]);

   return (
      <div className={classes.userPage}>
         {user && <UserHeader userData={user} />}
         <hr />
         {user && renderButtons(user)}

         {user && isSummary && <UserSummary userData={user} />}
         {user && <UserModels ref={modelsRef} />}
      </div>
   );
};
export default UserPage;
