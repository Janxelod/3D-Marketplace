import Button from "../ui/Button";
import SearchBar from "./searchbar/SearchBar";

import classes from "./NavBar.module.css";
import SearchNavBarDetails from "./searchbar/SearchNavBarDetails";
import React from "react";
import { Link } from "react-router-dom";

const SearchNavBar = () => {
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
                 <Link to="/"> <Button name="CANCEL"/></Link>
               </li>
            </ul>
         <SearchNavBarDetails />
         </header>
      </React.Fragment>
   );
};

export default SearchNavBar;
