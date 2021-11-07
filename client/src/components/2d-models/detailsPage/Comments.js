import { getFormatedDate } from "../../../commons/DateHelpers";

import classes from "./Comments.module.css";

const Comments = ({ comments }) => {
   const commentsResult = comments.map((comment) => {
      return (
         <div key={comment.id} className={classes.comment}>
            <div className={classes.commentUser}>
               {`User: ${comment.userId}`}
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
