import React, {useCallback, useMemo} from "react";
import {useDropzone} from "react-dropzone";
import {useDispatch, useSelector} from "react-redux";
import {useLocation} from "react-router";
import {useHistory} from "react-router-dom";

import Button from "../../../components/ui/Button";
import {setNewModel, resetNewModel} from "../../../redux/slices/newModel-slice";
import AsyncImage from "../../ui/AsyncImage";

import imageUploadStep1 from "../../../assets/imageUploadStep1.PNG";

import classes from "./UploadModelStep1.module.css";

const UploadModelStep1 = ({onClickUpload}) => {
   const modelURLFile = useSelector((state) => state.newModel.url);

   const location = useLocation();
   const history = useHistory();

   const {from} = {...location.state};

   const dispatch = useDispatch();

   const onDrop = useCallback((acceptedFile) => {
      const file = acceptedFile.pop();
      const fileURL = URL.createObjectURL(file);
      dispatch(setNewModel({url: fileURL, title: file.name, fileName: file.name}));
   }, []);

   const {getRootProps, getInputProps, isDragActive, isDragAccept, isDragReject} = useDropzone({
      accept: "image/jpeg, image/png, image/gif, image/webp",
      maxFiles: 1,
      onDrop,
   });

   const activeStyle = {
      borderColor: "#6157ff",
   };

   const acceptStyle = {
      borderColor: "#6157ff",
   };

   const rejectStyle = {
      borderColor: "#ff1744",
   };

   const style = useMemo(
      () => ({
         ...(isDragActive ? activeStyle : {}),
         ...(isDragAccept ? acceptStyle : {}),
         ...(isDragReject ? rejectStyle : {}),
      }),
      [isDragActive, isDragReject, isDragAccept]
   );

   const cancelHandler = (event) => {
      dispatch(resetNewModel());
      history.replace(from || "/");
   };

   return (
      <React.Fragment>
         <div className={classes.modelUploadPageStep1}>
            <h1>Upload a new image - Step 1</h1>
            <div className={classes.dragZoneParent}>
               <div {...getRootProps({style})}>
                  <input {...getInputProps()} />
                  {!modelURLFile && <img src={imageUploadStep1} />}
                  {modelURLFile && <AsyncImage src={modelURLFile} className={classes.imgPreview} />}
                  <p>Drag 'n' drop some files here, or click to select files</p>
                  <em>(Only *.jpeg, *.png, .*gif and .*WebP images will be accepted)</em>
               </div>
            </div>

            <div className={classes.footer}>
               <Button name="Cancel" className={classes.btn} onClick={cancelHandler} />
               {modelURLFile && <Button name="Upload image" onClick={onClickUpload} />}
            </div>
         </div>
      </React.Fragment>
   );
};

export default UploadModelStep1;
