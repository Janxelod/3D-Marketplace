import React from "react";

import NavBar from "../../components/navbar/NavBar";
import HomeContent from "../../components/homeContent/HomeContent";
import ModelCardsContainer from "../../components/2d-models/ModelCardsContainer";

import classes from "./Home.module.css"

const Home = () => {
   return (
      <React.Fragment>
         <NavBar/>
         <div className = {classes.home}>
            <HomeContent/>
            <ModelCardsContainer/>
         </div>
      </React.Fragment>
   );
};

export default Home;
