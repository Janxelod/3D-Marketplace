import { useRef } from "react";

import ModalContainer from "../ui/ModalContainer";
import SimpleInput from "../ui/SimpleInput";
import Button from "../ui/Button";
import { mailformat } from "./AuthUtils";

import classes from "./Auth.module.css";

const SignUp = ({onCancel, OnOpenLogin}) => {
   const nameRef = useRef();
   const emailRef = useRef();

   return (
      <ModalContainer title="Sign up"  onCancel={onCancel}>
         <SimpleInput
            ref={emailRef}
            type="email"
            id="username"
            label="Username"
            errorText="Invalid email address"
            isRequired={true}
            validation={(value) => value.match(mailformat)}
         />
         <SimpleInput
            ref={emailRef}
            type="email"
            id="email"
            label="Email"
            errorText="Invalid email address"
            isRequired={true}
            validation={(value) => value.match(mailformat)}
         />
         <SimpleInput
            ref={nameRef}
            type="password"
            id="name"
            label="Password"
            errorText="Must be at least 5 characters"
            isRequired={true}
            validation={(value) => value.length > 5 }
         />
         <Button name="Create account" className={classes.authButton}/>
         
         <p className={classes.authParagraph}>
            Already have an account? <span onClick={OnOpenLogin}>Log in here</span>
         </p>
      </ModalContainer>
   );
};

export default SignUp;
