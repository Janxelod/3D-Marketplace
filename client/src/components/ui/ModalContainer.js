import React from "react";
import ReactDOM from "react-dom";

import classes from "./ModalContainer.module.css";

const Backdrop = (props) => {
   return <div className={classes.backdrop} onClick={props.onCancel} />;
};

const ModalWrapper = (props) => {
   return (
      <div className={classes.modalContainerParent}>
         <div className={classes.modalContainer}>
            <header className={classes.header}>
               <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
               {props.children}
            </div>
         </div>
      </div>
   );
};

const ModalContainer = ({ title, onConfirm, onCancel, children }) => {
   return (
      <React.Fragment>
         {ReactDOM.createPortal(
            <Backdrop onCancel={onCancel}/>,
            document.getElementById("backdrop")
         )}
         {ReactDOM.createPortal(
            <ModalWrapper title={title} onConfirm={onConfirm}>
               {children}
            </ModalWrapper>,
            document.getElementById("overlay")
         )}
      </React.Fragment>
   );
};

export default ModalContainer;
