import {useSelector} from "react-redux";

import Button from "../../ui/Button";
import ModalContainer from "../../ui/ModalContainer";

import classes from "./DeleteModelPopup.module.css";

const DeleteModelPopup = ({onCancel, onConfirm}) => {
   const modelName = useSelector((state) => state.newModel.title);
   
   return (
      <ModalContainer title="Delete model" onCancel={onCancel}>
         <div className={classes.deleteModelContent}>
            <p>
               Are you sure that you want to delete <span>{modelName}</span> ?
            </p>
         </div>
         <div className={classes.footerDeleteModel}>
            <Button name="Cancel" onClick={onCancel} />
            <Button name="Delete" onClick={onConfirm} className={classes.deleteButton} />
         </div>
      </ModalContainer>
   );
};

export default DeleteModelPopup;
