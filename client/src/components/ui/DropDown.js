import React, { useImperativeHandle } from "react";
import { useState } from "react/cjs/react.development";

import classes from "./DropDown.module.css";

const DropDown = React.forwardRef(
   ({ data, label, className, onChange, defaultValue }, ref) => {
      const [currentSelection, setCurrentSelection] = useState(defaultValue);

      const selectOnChangeHandler = (event) => {
         const newSelection = event.target.value;
         setCurrentSelection(newSelection);
         onChange(newSelection);
      };

      const resetToDefaultValue = () => {
         setCurrentSelection(defaultValue);
      };

      useImperativeHandle(ref, ()=> {
         return {
            reset: resetToDefaultValue
         }
      });

      const dataParsed = data.map((item) => {
         return <Option key={item.value} value={item.value} name={item.name} />;
      });

      return (
         <div className={`${classes.dropDown} ${className}`}>
            <label>{label}</label>
            <select value={currentSelection} onChange={selectOnChangeHandler}>
               {dataParsed}
            </select>
         </div>
      );
   }
);

export const Option = ({ value, name }) => {
   return <option value={value}>{name}</option>;
};

export default DropDown;
