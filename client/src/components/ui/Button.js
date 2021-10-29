import classes from "./Button.module.css"

const Button = ({name, onClick}) => {
   return (
   <button className={classes.button} onClick = {onclick}> 
      <span>
         {name}
      </span>
   </button>);
};

export default Button;