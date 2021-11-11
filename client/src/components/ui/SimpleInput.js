import React, { useImperativeHandle } from "react";

import useInput from "../../hooks/useInput";

import classes from "./SimpleInput.module.css";

const SimpleInput = React.forwardRef((props, ref) => {
   // General props
   const { id, validation, label, errorText, isRequired } = props;
   // Input props
   const { type } = props;
   // Textarea props
   const { cols, rows, maxlength, isTextArea } = props;

   const isRequiredMessage = "This field is required";

   const {
      value,
      isValid,
      hasError,
      isEmpty,
      valueChangeHandler,
      inputBlurHandler,
      setNewValue,
      reset,
   } = useInput(validation, isRequired);

   const inputClass = `${classes["form-control"]} ${
      hasError || isEmpty ? "invalid" : ""
   }`;

   const setValue = (newValue) => {
      setNewValue(newValue);
   };

   useImperativeHandle(ref, () => {
      return {
         isValid,
         reset,
         value,
         setValue
      };
   });

   let errorMessage = "";
   if (isEmpty) {
      errorMessage = (
         <p className={classes["error-text"]}>{isRequiredMessage}</p>
      );
   } else if (hasError) {
      errorMessage = <p className={classes["error-text"]}>{errorText}</p>;
   }

   return (
      <div className={inputClass}>
         <label htmlFor={id}>{label}</label>
         {isTextArea && (
            <textarea
               rows={rows}
               cols={cols}
               maxLength={maxlength}
               id={id}
               onChange={valueChangeHandler}
               onBlur={inputBlurHandler}
               value={value}
            />
         )}
         {!isTextArea && (
            <input
               type={type}
               id={id}
               onChange={valueChangeHandler}
               onBlur={inputBlurHandler}
               value={value}
            />
         )}

         {errorMessage}
      </div>
   );
});

export default SimpleInput;
