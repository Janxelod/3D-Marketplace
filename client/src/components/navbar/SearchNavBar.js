import React from "react";
import { Link, useLocation } from "react-router-dom";

import Button from "../ui/Button";
import SearchBar from "./searchbar/SearchBar";
import SearchNavBarDetails from "./searchbar/SearchNavBarDetails";

import classes from "./NavBar.module.css";

const SearchNavBar = () => {
   const location = useLocation();
   const { from } = location.state;

   return (
      <React.Fragment>
         <header className={classes.navbar}>
            <ul>
               <li>
                  <h1>BocetoLab</h1>
               </li>
               <li className={classes.searchbar}>
                  <SearchBar />
               </li>
               <li>
                  <Link to={from}>
                     <Button name="CANCEL"/>
                  </Link>
               </li>
            </ul>
            <SearchNavBarDetails />
         </header>
      </React.Fragment>
   );
};

export default SearchNavBar;
