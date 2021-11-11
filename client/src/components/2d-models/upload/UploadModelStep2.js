import React, {useEffect, useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {MultiSelect} from "react-multi-select-component";

import AsyncImage from "../../ui/AsyncImage";
import SimpleInput from "../../../components/ui/SimpleInput";
import DropDown from "../../../components/ui/DropDown";
import MultiElementsInput from "../../../components/ui/MultiElementsInput";
import Button from "../../ui/Button";
import buildImageObject from "./BuildImageObject";
import DeleteStateManager from "../delete/DeleteStateManager";
import {updateNewModel} from "../../../redux/slices/newModel-slice";

import classes from "./UploadModelStep2.module.css";

const UploadModelStep2 = (props) => {
   const newModel = useSelector((state) => state.newModel);

   const modelTitleRef = useRef();
   const modelDescriptionRef = useRef();
   const modelVisibilityRef = useRef();
   const modelTagsRef = useRef();
   const deleteStateRef = useRef();

   const [selectedCategory, setSelectedCategory] = useState([]);
   const [download, setDownload] = useState("yes");

   const dispatch = useDispatch();

   useEffect(() => {
      modelTitleRef.current.setValue(newModel.title);
   }, []);

   let options = [
      {label: "All categories", value: "All"},
      {label: "Animal and Pets", value: "AnimalPets"},
      {label: "Architecture", value: "Architecture"},
      {label: "Arts & Abstract", value: "ArtsAbstract"},
      {label: "Cars & Vehicles", value: "CarsVehicles"},
      {label: "Characters & Creatures", value: "CharactersCreatures"},
      {label: "Electronics & Gadgets", value: "ElectronicGadgets"},
      {label: "Fashion & Style", value: "FashionStyle"},
      {label: "Food & Drink", value: "FoodDrink"},
      {label: "Furniture & Home", value: "FurnitureHome"},
      {label: "Music", value: "Music"},
      {label: "Nature & Plants", value: "NaturePlants"},
      {label: "News & Politics", value: "NewsPolitics"},
      {label: "People", value: "People"},
      {label: "Science & Technology", value: "ScienceTechno"},
   ];
   const changeMultiSelectHandler = (event) => {
      setSelectedCategory((prevSelected) => {
         if (event.length <= 3) {
            return event;
         }
         return prevSelected;
      });
   };

   const visibilityData = [
      {name: "Anyone in BocetoLab (Public)", value: "public"},
      {name: "Anyone with the link (Private)", value: "private"},
      {name: "Anyone with the link & password (Password)", value: "password"},
   ];

   const dropDownSelectHandler = (newSelection) => {
      // Do something??
   };

   const changeRadioButtonHandler = (event) => {
      setDownload(event.target.value);
   };

   const reUploadButtonHandler = (event) => {};

   const saveHandler = (event) => {
      const titleContent = modelTitleRef.current.value;
      const descriptionContent = modelDescriptionRef.current.value;
      const visibility = modelVisibilityRef.current.selection;
      const tags = modelTagsRef.current.elements;

      const modelObject = buildImageObject({
         titleContent,
         descriptionContent,
         visibility,
         tags,
         download,
         selectedCategory,
      });

      dispatch(updateNewModel(modelObject));
   };

   const publishHandler = (event) => {};

   const deleteHandler = (event) => {
      deleteStateRef.current.open();
   };

   return (
      <React.Fragment>
         <DeleteStateManager ref={deleteStateRef} />
         <h1 style={{textAlign: "center", color: "white"}}>Edit Image - Step 2</h1>
         <div className={classes.modelUploadPageStep2}>
            <div className={classes.modelPreviewContainer}>
               <div className={classes.modelPreview}>
                  {newModel.url && <AsyncImage src={newModel.url} className={classes.imgPreview} />}
                  <p>
                     Upload state: <span> Finished</span>
                  </p>
                  <p>Ready to publish</p>
               </div>
               <Button name="Reupload" onClick={reUploadButtonHandler} />
            </div>
            <div className={classes.modelFormDetails}>
               <SimpleInput
                  ref={modelTitleRef}
                  type="text"
                  id="title"
                  label="Title"
                  errorText="Invalid title"
                  isRequired={true}
                  validation={(value) => value.length > 5}
               />
               <SimpleInput
                  ref={modelDescriptionRef}
                  isTextArea={true}
                  id="description"
                  label="Description"
                  errorText="Invalid Description"
                  rows={10}
                  cols={78}
                  maxlength={512}
               />
               <label>Categories</label>
               <MultiSelect
                  options={options}
                  value={selectedCategory}
                  onChange={changeMultiSelectHandler}
                  hasSelectAll={false}
                  disableSearch={true}
                  className={`${classes.rmsc}`}
               />
               <MultiElementsInput label="Tags" ref={modelTagsRef} />
            </div>
            <div className={classes.modelPropertiesSide}>
               <div className={classes.description}>
                  This Draft will be deleted automatically in 30 min, unless you publish it.
               </div>
               <DropDown
                  label="Who can see?"
                  onChange={dropDownSelectHandler}
                  data={visibilityData}
                  className={classes.item}
                  ref={modelVisibilityRef}
                  defaultValue={"All"}
               />

               <div className={classes.downloadOption} onChange={changeRadioButtonHandler}>
                  <label>Download</label>
                  <div>
                     <input
                        type="radio"
                        value="yes"
                        name="download"
                        defaultChecked={download === "yes"}
                     />
                     Yes
                     <input
                        type="radio"
                        value="no"
                        name="download"
                        defaultChecked={download === "no"}
                     />
                     No
                  </div>
               </div>
            </div>
         </div>
         <div className={classes.footer}>
            <hr />
            <div className={classes.footerButtons}>
               <Button
                  name="Delete model"
                  className={classes.deleteButton}
                  onClick={deleteHandler}
               />
               <Button name="Save" onClick={saveHandler} />
               <Button name="Publish" onClick={publishHandler} />
            </div>
         </div>
      </React.Fragment>
   );
};

export default UploadModelStep2;
