import React, { useImperativeHandle } from "react";

import useInput from "../../hooks/useInput";

import classes from "./SimpleInput.module.css";

const SimpleInput = React.forwardRef((props, ref) => {
   const { id, validation, label, type, errorText, isRequired } = props;
   const isRequiredMessage = "This field is required";

   const {
      value,
      isValid,
      hasError,
      isEmpty,
      valueChangeHandler,
      inputBlurHandler,
      reset,
   } = useInput(validation, isRequired);

   const inputClass = `${classes["form-control"]} ${
      hasError || isEmpty ? "invalid" : ""
   }`;

   useImperativeHandle(ref, () => {
      return {
         isValid,
         reset,
      };
   });

   let errorMessage = "";
   if(isEmpty) {
      errorMessage =  <p className={classes["error-text"]}>{isRequiredMessage}</p>;
   }else if(hasError) {
      errorMessage = <p className={classes["error-text"]}>{errorText}</p>;
   }

   return (
      <div className={inputClass}>
         <label htmlFor={id}>{label}</label>
         <input
            type={type}
            id={id}
            onChange={valueChangeHandler}
            onBlur={inputBlurHandler}
            value={value}
         />
         {errorMessage}
      </div>
   );
});

export default SimpleInput;
