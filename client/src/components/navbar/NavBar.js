
import Button from "../ui/Button";

import classes from "./NavBar.module.css";
import SearchBar from "./searchbar/SearchBar";

const NavBar = () => {

   return (<header className = {classes.navbar}>
         <ul>
            <li><h1>BocetoLab</h1></li>
            <li><Button name ="EXPLORE"/></li>
            <li><SearchBar/></li>
            <li><Button name ="LOGIN"/></li>
            <li><Button name ="SIGN UP"/></li>
            <li><Button name ="UPLOAD"/></li>
         </ul>
   </header>);
};

export default NavBar;