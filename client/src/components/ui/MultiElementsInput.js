import React, {useState, useImperativeHandle} from "react";

import {X} from "react-feather";

import classes from "./MultiElementsInput.module.css";

const Element = ({content, onRemoveElement}) => {
   return (
      <div className={classes.element} onClick={onRemoveElement}>
         <div className={classes.elementText}>
            {content}
            <X size="12" />
         </div>
      </div>
   );
};

const MultiElementsInput = React.forwardRef(({label}, ref) => {
   const [elements, setElements] = useState([]);
   const [inputValue, setInputValue] = useState();

   const removeElementHandler = (element) => {
      setElements((prevElements) => prevElements.filter((el) => el !== element));
   };

   const renderElements = (elementsArray) => {
      let currIndex = 0;
      return elementsArray.map((element) => {
         return (
            <Element
               key={currIndex++}
               content={element}
               onRemoveElement={() => removeElementHandler(element)}
            />
         );
      });
   };

   const changeTextAreaHandler = (event) => {
      const value = event.target.value;
      const containsSpace = value.indexOf(" ") !== -1;
      const containsNewLine = value.indexOf("\n") !== -1 || value.indexOf("\r") !== -1;

      if (containsSpace || containsNewLine) {
         setElements((prevElements) => {
            const valueIsSpaceOrNewLine = value === " " || value === "\n" || value === "\r";
            const trimmedValue = value.trim();
            const valueIsRepeated = prevElements.indexOf(trimmedValue) !== -1;

            if (valueIsSpaceOrNewLine || valueIsRepeated) {
               return prevElements;
            }
            return prevElements.concat(trimmedValue);
         });
         setInputValue("");
      } else {
         setInputValue(value);
      }
   };

   useImperativeHandle(ref, () => {
      return {
         elements,
      };
   });

   return (
      <React.Fragment>
         <div className={classes.multiElements}>
            <label>{label}</label>
            <div className={classes.multiElementsContent}>
               {renderElements(elements)}
               <textarea
                  value={inputValue}
                  rows={1}
                  maxLength={47}
                  placeholder="Add another"
                  onChange={changeTextAreaHandler}
               />
            </div>
         </div>
      </React.Fragment>
   );
});

export default MultiElementsInput;