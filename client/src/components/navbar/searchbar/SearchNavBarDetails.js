import React, { useState, useRef } from "react";

import CheckBox from "../../ui/CheckBox";
import DropDown from "../../ui/DropDown";
import Button from "../../ui/Button";

import classes from "./SearchNavBarDetails.module.css";

const categoryData = [
   { name: "All categories", value: "All" },
   { name: "Animal and Pets", value: "AnimalPets" },
   { name: "Architecture", value: "Architecture" },
   { name: "Arts & Abstract", value: "ArtsAbstract" },
   { name: "Cars & Vehicles", value: "CarsVehicles" },
   { name: "Characters & Creatures", value: "CharactersCreatures" },
];

const dateData = [
   { name: "All time", value: 0 },
   { name: "This month", value: 30 },
   { name: "This week", value: 7 },
   { name: "Today", value: 1 },
];

const sortData = [
   { name: "Relevance", value: "relev" },
   { name: "Most liked", value: "liked" },
   { name: "Most viewed", value: "viewed" },
   { name: "Most recent", value: "recent" },
];

const SearchNavBarDetails = () => {
   const [checkDownloadable, setCheckDownloadable] = useState(false);
   const [checkPaid, setCheckPaid] = useState(false);
   const [checkAnimated, setCheckAnimated] = useState(false);

   const categoryDropdownRef = useRef();
   const dateDropdownRef = useRef();
   const sortDropdownRef = useRef();

   const dropDownSelectHandler = (newSelection) => {
      console.log(`New selection: ${newSelection}`);

      // Append the dropdown selections to call the API
   };

   const resetButtonHandler = () => {
      setCheckDownloadable(false);
      setCheckPaid(false);
      setCheckAnimated(false);

      categoryDropdownRef.current.reset();
      dateDropdownRef.current.reset();
      sortDropdownRef.current.reset();
   };

   const checkDownloadableHandler = () => {
      setCheckDownloadable(prevCheck => !prevCheck);
   };

   return (
      <div className={classes.searchNavBarDetails}>
         <DropDown
            label="CATEGORY"
            onChange={dropDownSelectHandler}
            data={categoryData}
            className={classes.item}
            ref = {categoryDropdownRef}
            defaultValue={"All"}
         />
         <DropDown
            label="DATE"
            onChange={dropDownSelectHandler}
            data={dateData}
            className={classes.item}
            ref = {dateDropdownRef}
            defaultValue={0}
         />
         <CheckBox
            label="Downloadable"
            value={checkDownloadable}
            onChange={() => setCheckDownloadable(prevCheck => !prevCheck)}
            className={classes.item}
         />
         <CheckBox
            label="Paid"
            value={checkPaid}
            onChange={() => setCheckPaid(prevCheck => !prevCheck)}
            className={classes.item}
         />
         <CheckBox
            label="Animated(GIF)"
            value={checkAnimated}
            onChange={() => setCheckAnimated(prevCheck => !prevCheck)}
            className={classes.item}
         />
         <Button name="Reset" onClick={resetButtonHandler} />
         <DropDown
            label="SORT BY"
            onChange={dropDownSelectHandler}
            data={sortData}
            className={classes.item}
            ref = {sortDropdownRef}
            defaultValue="recent"
         />
      </div>
   );
};

export default SearchNavBarDetails;
