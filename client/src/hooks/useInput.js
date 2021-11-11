import { useReducer } from "react";

const initialInputState = {
   value: "",
   isTouched: false,
};

const inputStateReducer = (state, action) => {
   if (action.type === "INPUT") {
      return { value: action.value, isTouched: state.isTouched };
   }
   if (action.type === "BLUR") {
      return { isTouched: true, value: state.value };
   }
   if (action.type === "RESET") {
      return { isTouched: false, value: "" };
   }
   return initialInputState;
};

const useInput = (validateValue, isRequired = false) => {
   const [inputState, dispatch] = useReducer(
      inputStateReducer,
      initialInputState
   );

   const valueIsValid = validateValue === undefined || validateValue(inputState.value);
   const hasError = !valueIsValid && inputState.isTouched;

   const valueIsEmpty = isRequired && inputState.value.trim() === "";
   const isEmpty = valueIsEmpty && inputState.isTouched;

   const valueChangeHandler = (event) => {
      dispatch({ type: "INPUT", value: event.target.value });
   };

   const inputBlurHandler = (event) => {
      dispatch({ type: "BLUR" });
   };

   const reset = () => {
      dispatch({ type: "RESET" });
   };

   const setNewValue = (newValue) => {
      dispatch({type: "INPUT", value: newValue});
   }

   return {
      value: inputState.value,
      isValid: valueIsValid,
      hasError,
      isEmpty,
      valueChangeHandler,
      inputBlurHandler,
      setNewValue,
      reset,
   };
};

export default useInput;
