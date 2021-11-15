import {useEffect, useRef} from "react";
import {Link, useLocation} from "react-router-dom";

import Button from "../ui/Button";
import SearchBar from "./searchbar/SearchBar";
import useReferredState from "../../hooks/useReferedState";

import classes from "./NavBar.module.css";

const NavBar = ({OnOpenLogin, OnOpenSignUp}) => {
   const [startedScrolling, setStartedScrolling] = useReferredState(false);
   const headerRef = useRef();
   const {pathname} = useLocation();

   const onScrollHandler = () => {
      if (!startedScrolling.current) {
         setStartedScrolling(true);
         if(headerRef.current)
         {
            headerRef.current.className = `${classes.navbar} ${classes.scrolledNavbar}`;
         }
      }

      if (window.scrollY === 0) {
         setStartedScrolling(false);
         if(headerRef.current)
         {
            headerRef.current.className = `${classes.navbar}`;
         }
      }
   };

   useEffect(() => {
      window.addEventListener("scroll", onScrollHandler);
      return () => {
         window.removeEventListener("scroll", onScrollHandler);
      };
   }, []);

   return (
      <header className={classes.navbar} ref={headerRef}>
         <ul>
            <li className={classes.h1Link}>
               <Link to="/">
                  <h1>BocetoLab</h1>
               </Link>
            </li>
            <li>
               <Button name="EXPLORE" />
            </li>
            <li className={classes.searchbar}>
               <Link to={{pathname: "/search", state: {from: pathname}}}>
                  <SearchBar />
               </Link>
            </li>
            <li>
               <Button name="LOGIN" onClick={OnOpenLogin} />
            </li>
            <li>
               <Button name="SIGN UP" onClick={OnOpenSignUp} />
            </li>
            <li>
               <Link to={{pathname: "/models/upload", state: {from: pathname}}}>
                  <Button name="UPLOAD" />
               </Link>
            </li>
         </ul>
      </header>
   );
};

export default NavBar;
