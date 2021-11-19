import React from "react";
import {Link} from "react-router-dom";

import Button from "../../ui/Button";
import { getUserLink } from "../../../commons/LinkParser";

import classes from "./HeaderDetails.module.css";
import commonClasses from "../../../commons/styles/LinkStyles.module.css";

const HeaderDetails = ({title, userId, views, userLikes}) => {
   const userLink = getUserLink(userId);

   return (
      <React.Fragment>
         <div className={classes.headerWrapper}>
            <h1>{title}</h1>
            <Button className={classes.downloadButton} name="Download" />
         </div>
         <div className={classes.ownerWrapper}>
            <div className={classes.owner}>
               <Link to={userLink} className={commonClasses.linkStyle}>
                  <span>User: </span> {userId}
               </Link>
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
