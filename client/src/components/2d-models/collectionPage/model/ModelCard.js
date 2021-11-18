import { Eye, Star, MessageSquare} from "react-feather";

import Card from "../../../ui/Card";

import classes from "./ModelCard.module.css";

const ModelCard = (props) => {
   return (
      <Card>
         <div className={classes.main}>
            <img alt={props.title} src={props.sourcefile} />
         </div>
         <div className={classes.footer}>
            <div className={classes.left}>
               <a href="#" className={classes.userAvatar}>
                  <img alt={props.userId} src={props.sourcefile} />
               </a>
               <div className={classes.title}>
                  <p>
                     <a>{props.title}</a>
                  </p>
               </div>
            </div>
            <div className={classes.right}>
               <span className={classes.count}>
                  <Eye size="12"/>
                  <span >{props.views}</span>
               </span>
               <span className={classes.count}>
                  <MessageSquare size="12"/>
                  <span >{props.comments || 0}</span>
               </span>
               <span className={classes.count}>
                  <Star size="12"/>
                  <span>{props.userLikes.split("-").length}</span>
               </span>
            </div>
         </div>
      </Card>
   );
};

export default ModelCard;
