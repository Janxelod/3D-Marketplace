import React from "react";

import AsyncImage from "../../components/ui/AsyncImage";
import Comments from "../../components/2d-models/detailsPage/Comments";
import MetadataList from "../../components/2d-models/detailsPage/MetadataList";
import MetadataStats from "../../components/2d-models/detailsPage/MetadataStats";
import HeaderDetails from "../../components/2d-models/detailsPage/HeaderDetails";

import classes from "./ModelPage.module.css";

const DUMMY_MODEL = {
   id: 1,
   title: "First image!",
   sourcefile:
      "https://cdn.pixabay.com/photo/2021/08/28/19/13/wheat-field-6581723_960_720.jpg",
   userId: 1,
   description: "This is a beautiful gree wheat. This is a beautiful gree wheat. This is a beautiful gree wheat. This is a beautiful gree wheat.",
   tags: "plant-green-close-up",
   categories: [
      "Animal and Pets",
      "Characters and Creatures",
   ],
   visibility: "public",
   publishDate: "2021-11-03T10:25:43.511Z",
   userLikes: "1-2-3",
   views: 11,
   price: 0,
   metadata: {
      height: 720,
      width: 480,
      pixelDensity: 345600,
      creationDate: "2020-10-07T06:25:15.511Z",
   },
};

const DUMMY_COMMENTS = [
   { id: 1, message: "Some comment 1 Some comment 1 Some comment 1 Some comment 1 Some comment 1 Some comment 1.", imageId: 1, userId: 2, publishDate: "2021-11-03T11:25:43.511Z" },
   { id: 2, message: "Some comment 2 Some comment 2 Some comment 2 Some comment 2 Some comment 2 Some comment 2.", imageId: 1, userId: 3, publishDate: "2021-11-03T12:25:43.511Z"  },
   { id: 3, message: "Some comment 3 Some comment 3 Some comment 3 Some comment 3 Some comment 3 Some comment 3.", imageId: 1, userId: 2, publishDate: "2021-11-03T14:25:43.511Z"  },
];

const ModelPage = () => {
   return (
      <div className={classes.modelPageRoot}>
         <div className={classes.modelPage}>

            <div className={classes.modelDetails}>

               <div className={classes.modelPageLeft}>
                  <div>
                     <AsyncImage  className={classes.imageContainer} src={DUMMY_MODEL.sourcefile} />
                  </div>
                  <p>{DUMMY_MODEL.description}</p>
               </div>
               
               <div className={classes.modelPageRight}>
                  <HeaderDetails {...DUMMY_MODEL}/>
                  <hr/>
                  <MetadataStats {...DUMMY_MODEL.metadata}/>
                  <hr/>
                  <MetadataList {...DUMMY_MODEL}/>
               </div>
            </div>
            <Comments comments = {DUMMY_COMMENTS}/>
         </div>
      </div>
   );
};

export default ModelPage;
