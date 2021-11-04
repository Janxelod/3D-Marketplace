import React from "react";

import HomeContent from "../../components/homeContent/HomeContent";
import ModelCardsContainer from "../../components/2d-models/collectionPage/ModelCardsContainer";

import classes from "./Home.module.css";

const HomePage = () => {

   return (
      <React.Fragment>
         <div className={classes.home}>
            <HomeContent />
            <ModelCardsContainer />
         </div>
      </React.Fragment>
   );
};

export default HomePage;
