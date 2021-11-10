import classes from "./Button.module.css"

const Button = ({name, onClick, className}) => {
   return (
   <button className={`${classes.button} ${className || ""}` } onClick = {onClick}> 
      <span>
         {name}
      </span>
   </button>);
};

export default Button;