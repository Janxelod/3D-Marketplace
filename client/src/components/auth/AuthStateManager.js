import React, { useState, useImperativeHandle } from "react";

import Login from "./Login";
import SignUp from "./SignUp";
import { AuthEnum } from "./AuthUtils";

// Provisional name
const AuthStateManager = React.forwardRef((props, ref) => {
   const [authState, setAuthState] = useState();

   const closeAuth = () => {
      setAuthState(AuthEnum.NONE);
   };

   const openLogin = () => {
      setAuthState(AuthEnum.LOGIN);
   };

   const openSignUp = () => {
      setAuthState(AuthEnum.SIGNUP);
   };

   useImperativeHandle(ref, () => {
      return {
         closeAuth,
         openLogin,
         openSignUp
      };
   });

   const renderAuth = () => {
      switch (authState) {
         case AuthEnum.LOGIN:
            return <Login onCancel={closeAuth} OnOpenSignUp={openSignUp} />;
         case AuthEnum.SIGNUP:
            return <SignUp onCancel={closeAuth} OnOpenLogin={openLogin} />;
      }
      return "";
   };

   return (
      <React.Fragment>
         {renderAuth()}
      </React.Fragment>
   );
});

export default AuthStateManager;