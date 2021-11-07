import React, { useRef }  from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import HomePage from "./pages/Home/HomePage";
import ModelPage from "./pages/Models/ModelPage";
import SearchPage from "./pages/Search/SearchPage";
import NavBar from "./components/navbar/NavBar";
import AuthStateManager from "./components/auth/AuthStateManager";

const App = () => {
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
         <Router>
            <AuthStateManager ref ={authStateRef}/>
            <Route path={['/', '/models/:modelId', '/models']} exact>
               <NavBar
                  OnOpenLogin={openLogin}
                  OnOpenSignUp={openSignUp}
                  OnCloseAuth={closeAuth}
               />
            </Route>
            <Switch>
               <Route path="/" exact>
                  <HomePage />
               </Route>
               <Route path="/search" exact>
                  <SearchPage/>
               </Route>
               <Route path="/models" exact>
                  <ModelPage/>
               </Route>
               <Route path="/models/:modelId">
                  <ModelPage/>
               </Route>
               <Redirect to="/" />
            </Switch>
         </Router>
      </React.Fragment>
   );
};

export default App;
