import React, { useRef } from "react";

import NavBar from "../../components/navbar/NavBar";
import HomeContent from "../../components/homeContent/HomeContent";
import ModelCardsContainer from "../../components/2d-models/ModelCardsContainer";
import AuthStateManager from "../../components/auth/AuthStateManager";

import classes from "./Home.module.css";

const Home = () => {
   const authStateRef = useRef();

   const closeAuth = () => {
      authStateRef.current.closeAuth();
   };

   const openLogin = () => {
      authStateRef.current.openLogin();
   };

   const openSignUp = () => {
      authStateRef.current.openSignUp();
   };

   return (
      <React.Fragment>
         <AuthStateManager ref ={authStateRef}/>
         <NavBar
            OnOpenLogin={openLogin}
            OnOpenSignUp={openSignUp}
            OnCloseAuth={closeAuth}
         />
         <div className={classes.home}>
            <HomeContent />
            <ModelCardsContainer />
         </div>
      </React.Fragment>
   );
};

export default Home;
