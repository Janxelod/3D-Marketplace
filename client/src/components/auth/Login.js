import { useRef } from "react";

import ModalContainer from "../ui/ModalContainer";
import SimpleInput from "../ui/SimpleInput";
import Button from "../ui/Button";
import { mailformat } from "./AuthUtils";

import classes from "./Auth.module.css";

const Login = ({onCancel, OnOpenSignUp}) => {
   const nameRef = useRef();
   const emailRef = useRef();

   return (
      <ModalContainer title="Login to BocetoLab"  onCancel={onCancel}>
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
         <Button name="Login with email" className={classes.authButton}/>
         <p className={classes.authParagraph}>
            New to BocetoLab? <span onClick={OnOpenSignUp}>Create an account</span>
         </p>
      </ModalContainer>
   );
};

export default Login;
