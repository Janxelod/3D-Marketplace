import AsyncImage from "../../ui/AsyncImage";
import Button from "../../ui/Button";

import classes from "./Header.module.css";

const Header = ({userData}) => {
   const profilePictureUrl = "https://avatars.githubusercontent.com/u/4271463";
   const isOwner = false;
   
   return (
      <div className={classes.header}>
         <div className={classes.profilePicture}>
            <AsyncImage src={profilePictureUrl} />
         </div>
         <div className={classes.userHeader}>
            <div className={classes.userNameLocation}>
               <div>
                  <h2>{userData.displayName}</h2>
               </div>
               <div>
                  <h3>{userData.location}</h3>
               </div>
            </div>
            <p className={classes.userTagline}>{userData.tagline}</p>
            {isOwner && <Button name="Edit Profile" />}
         </div>
      </div>
   );
};

export default Header;