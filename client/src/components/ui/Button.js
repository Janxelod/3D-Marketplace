import classes from "./Button.module.css";

const Button = ({name, onClick, className, isSelected}) => {
   const selectedClass = isSelected ? classes.selected : "";
   return (
      <button
         className={`${classes.button} ${className || ""} ${selectedClass}`}
         onClick={onClick}>
         <span>{name}</span>
      </button>
   );
};

export default Button;
