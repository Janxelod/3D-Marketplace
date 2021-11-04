import { getFormatedDate } from "../../../commons/DateHelpers";

import classes from "./MetadataList.module.css";

const MetadataList = ({ publishDate, tags, categories }) => {

   const categoriesListResult = (categories) => {
      return (
         <ul className={classes.categoriesList}>
            {categories.map((category) => {
               return <li className={classes.categoryItem}>{category}</li>;
            })}
         </ul>
      );
   };

   const tagsListResult = (tags) => {
      const tagsList = tags.split("-");
      return (
         <ul className={classes.tagsList}>
            {tagsList.map((tag) => {
               return <li className={classes.tagItem}>{tag}</li>;
            })}
         </ul>
      );
   };

   return (
      <div className={classes.metadataList}>
         <section className={classes.imagePublication}>
            <p>
               <span>Published:</span> {getFormatedDate(publishDate)}
            </p>
         </section>
         <section className={classes.imageCategories}>
         <span>Categories:</span> {categoriesListResult(categories)}
         </section>
         <section className={classes.imageTags}>
         <span> Tags:</span>  {tagsListResult(tags)}
         </section>
      </div>
   );
};

export default MetadataList;