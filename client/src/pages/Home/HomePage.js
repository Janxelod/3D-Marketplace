import React, { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { getModels } from "../../redux/slices/models-slice";

import HomeContent from "../../components/homeContent/HomeContent";
import ModelCardsContainer from "../../components/2d-models/collectionPage/ModelCardsContainer";

import classes from "./Home.module.css";

const HomePage = () => {
   const dispatch = useDispatch();
   const models = useSelector((state) => state.models.modelsData);

   useEffect(() => {
      dispatch(getModels({test: "hi"}));
   }, []);

   return (
      <React.Fragment>
         <div className={classes.home}>
            <HomeContent />
            {models.length > 0 && <ModelCardsContainer models ={models}/>}
         </div>
      </React.Fragment>
   );
};

export default HomePage;
