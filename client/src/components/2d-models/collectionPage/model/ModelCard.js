import {Eye, Star, MessageSquare} from "react-feather";
import {Link} from "react-router-dom";

import Card from "../../../ui/Card";
import { getUserLink, getModelLink } from "../../../../commons/LinkParser";

import classes from "./ModelCard.module.css";
import commonClasses from "../../../../commons/styles/LinkStyles.module.css";

const ModelCard = (props) => {
   const modelLink = getModelLink(props.id);
   const userLink = getUserLink(props.userId);

   return (
      <Card>
         <div className={classes.main}>
            <Link to={modelLink}>
               <img alt={props.title} src={props.sourcefile} />
            </Link>
         </div>
         <div className={classes.footer}>
            <div className={classes.left}>
               <Link to={userLink}>
                  <img alt={props.userId} src={props.sourcefile} />
               </Link>
               <div className={classes.title}>
                  <p>
                     <Link to={modelLink} className={commonClasses.linkStyle}>
                        {props.title}
                     </Link>
                  </p>
               </div>
            </div>
            <div className={classes.right}>
               <span className={classes.count}>
                  <Eye size="12" />
                  <span>{props.views}</span>
               </span>
               <span className={classes.count}>
                  <Link to={{pathname: modelLink, hash: "#comments"}} className={commonClasses.linkStyle}>
                     <MessageSquare size="12" />
                     <span>{props.comments || 0}</span>
                  </Link>
               </span>
               <span className={classes.count}>
                  <Star size="12" />
                  <span>{props.userLikes.split("-").length}</span>
               </span>
            </div>
         </div>
      </Card>
   );
};

export default ModelCard;
