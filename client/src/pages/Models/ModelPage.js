import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";

import AsyncImage from "../../components/ui/AsyncImage";
import Comments from "../../components/2d-models/detailsPage/Comments";
import MetadataList from "../../components/2d-models/detailsPage/MetadataList";
import MetadataStats from "../../components/2d-models/detailsPage/MetadataStats";
import HeaderDetails from "../../components/2d-models/detailsPage/HeaderDetails";
import { getModel } from "../../redux/slices/model-slice";

import classes from "./ModelPage.module.css";

const ModelPage = () => {
   const dispatch = useDispatch();
   const params = useParams();

   useEffect(()=> {
      dispatch(getModel({test: "hi", id: params.modelId}));
   }, []);

   const model = useSelector((state) => state.model.model2D);

   const renderModelContent = (modelData) => {
      return (
      <React.Fragment>
         <div className={classes.modelDetails}>
            <div className={classes.modelPageLeft}>
               <div>
                  <AsyncImage  className={classes.imageContainer} src={modelData.sourcefile} />
               </div>
               <p>{modelData.description}</p>
            </div>
            
            <div className={classes.modelPageRight}>
               <HeaderDetails {...modelData}/>
               <hr/>
               <MetadataStats {...modelData.metadata}/>
               <hr/>
               <MetadataList {...modelData}/>
            </div>
         </div>
         <Comments comments = {modelData.comments}/>
      </React.Fragment>);
   };

   return (
      <div className={classes.modelPageRoot}>
         <div className={classes.modelPage}>
            {model && renderModelContent(model)}
         </div>
      </div>
   );
};

export default ModelPage;
