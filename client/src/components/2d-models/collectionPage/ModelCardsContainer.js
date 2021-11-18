import ModelCard from "./model/ModelCard";

import classes from "./ModelCardsContainer.module.css";

const ModelCardsContainer = ({cssProperties, models}) => {
   const modelList = models.map(model => {
      return (<li key={model.id} > 
         <ModelCard {...model}/>
         </li>);
   });

   return <div className={classes.cardsContainer} style={cssProperties}>
      <ul>
         {modelList}
      </ul>
   </div>;
};

export default ModelCardsContainer;
