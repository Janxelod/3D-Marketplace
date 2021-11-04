import { getFormatedDate } from "../../../commons/DateHelpers";

import classes from "./MetadataStats.module.css";

const MetadataStats = ({ height, width, pixelDensity, creationDate }) => {
   return (
      <div className={classes.metadataStats}>
         <div className={classes.metadataInfo}>
            <div>
               <span>Height:</span>
               {width}
            </div>
            <div>
               <span> Width:</span> {height}
            </div>
         </div>
         
         <div className={classes.metadataInfo}> 
            <div>
               <span>Creation date:</span>
               {getFormatedDate(creationDate)}
            </div>
            <div>
               {" "}
               <span>Pixel density:</span>
               {pixelDensity}
            </div>
         </div>
         
      </div>
   );
};

export default MetadataStats;
