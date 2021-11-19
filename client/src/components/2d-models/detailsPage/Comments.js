import {Link} from "react-router-dom";

import {getFormatedDate} from "../../../commons/DateHelpers";
import { getUserLink } from "../../../commons/LinkParser";

import classes from "./Comments.module.css";
import commonClasses from "../../../commons/styles/LinkStyles.module.css";

const Comments = ({comments}) => {
   const commentsResult = comments.map((comment) => {
      const userLink = getUserLink(comment.userId);

      return (
         <div key={comment.id} className={classes.comment}>
            <div className={classes.commentUser}>
               <Link
                  to={userLink}
                  className={commonClasses.linkStyle}>{`User: ${comment.userId}`}</Link>
               <span>{getFormatedDate(comment.publishDate)}</span>
            </div>

            <div className={classes.commentContent}>{comment.message}</div>
            <hr />
         </div>
      );
   });

   return (
      <div className={classes.commentsContainer}>
         <h2>{`${comments.length} comments`}</h2>
         {commentsResult}
      </div>
   );
};

export default Comments;
