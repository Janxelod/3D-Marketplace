import React from "react";

import Button from "../../ui/Button";

import classes from "./HeaderDetails.module.css";

const HeaderDetails = ({ title, userId, views, userLikes }) => {
   return (
      <React.Fragment>
         <div className={classes.headerWrapper}>
            <h1>{title}</h1>
            <Button className={classes.downloadButton} name="Download" />
         </div>
         <div className={classes.ownerWrapper}>
            <div className={classes.owner}>
               <span>User: </span> {userId}
            </div>
            <div className={classes.stats}>
               <div className={classes.views}>
                  <span>Views:</span> {views}
               </div>
               <div className={classes.likes}>
                  <span>Likes:</span>
                  {userLikes.split("-").length}
               </div>
            </div>
         </div>
      </React.Fragment>
   );
};

export default HeaderDetails;
