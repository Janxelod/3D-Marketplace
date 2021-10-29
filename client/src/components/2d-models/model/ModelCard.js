import { Eye, Star, MessageSquare} from "react-feather";
import Card from "../../ui/Card";

import classes from "./ModelCard.module.css";

const ModelCard = (props) => {
   return (
      <Card className={classes.main}>
         <div>
            <img alt={props.modelTitle} src={props.imageSrc} />
         </div>
         <div className={classes.footer}>
            <div className={classes.left}>
               <a href="#" className={classes.userAvatar}>
                  <img alt={props.user} src={props.userImageSrc} />
               </a>
               <div className={classes.title}>
                  <p>
                     <a>{props.modelTitle}</a>
                  </p>
               </div>
            </div>
            <div className={classes.right}>
               <span className={classes.count}>
                  <Eye size="12"/>
                  <span >{props.viewsCount}</span>
               </span>
               <span className={classes.count}>
                  <MessageSquare size="12"/>
                  <span >{props.commentsCount}</span>
               </span>
               <span className={classes.count}>
                  <Star size="12"/>
                  <span>{props.likesCount}</span>
               </span>
            </div>
         </div>
      </Card>
   );
};

export default ModelCard;
