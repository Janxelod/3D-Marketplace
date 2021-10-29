import React from "react";

import HomeContent from "../../components/homeContent/HomeContent";

import ModelCardsContainer from "../../components/2d-models/ModelCardsContainer";

const Home = () => {
   return (
      <React.Fragment>
         <HomeContent/>
         <ModelCardsContainer/>
      </React.Fragment>
   );
};

export default Home;
