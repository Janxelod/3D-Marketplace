import classes from "./SearchBar.module.css";

const SearchBar = () => {
   const onFocusHandler = (event) => {

   };

   return (
   <div className = {classes.input}>
      <input onFocus = {onFocusHandler}/>
   </div>);
};

export default SearchBar;