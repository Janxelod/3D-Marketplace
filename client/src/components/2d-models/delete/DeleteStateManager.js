import DeleteModelPopup from "./DeleteModelPopup";
import React, { useState, useImperativeHandle } from "react";

export const DeletePopupState = {
   OPEN : 1,
   CLOSE : 2
};

const DeleteStateManager = React.forwardRef( ({onConfirm}, ref) => {
   const [deleteState, setDeleteState] = useState();

   const closeDelete = () => {
      setDeleteState(DeletePopupState.CLOSE);
   };

   const openDelete = () => {
      setDeleteState(DeletePopupState.OPEN);
   };

   useImperativeHandle(ref, () => {
      return {
         close: closeDelete,
         open: openDelete
      };
   });

   const renderPopup = () => {
      switch (deleteState) {
         case DeletePopupState.OPEN:
            return <DeleteModelPopup onCancel={closeDelete}/>;
         case DeletePopupState.CLOSE:
            return "";
      }
   };

   return <React.Fragment>{renderPopup()}</React.Fragment>;
});

export default DeleteStateManager;
