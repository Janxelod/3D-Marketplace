import React from "react";
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import SearchPage from "./pages/Search/SearchPage";
import Home from "./pages/Home/Home";

const App = () => {
   return (
      <React.Fragment>
         <Router>
            <Switch>
               <Route path="/" exact>
                  <Home />
               </Route>
               <Route path="/search" exact>
                  <SearchPage/>
               </Route>
               <Redirect to="/" />
            </Switch>
         </Router>
      </React.Fragment>
   );
};

export default App;
