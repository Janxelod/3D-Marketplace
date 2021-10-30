import ModelCard from "./model/ModelCard";
import imagePlaceHolder from "../../assets/imagePlaceholder.PNG";
import imagePlaceHolder2 from "../../assets/imagePlaceholder2.PNG";
import imagePlaceHolder3 from "../../assets/imagePlaceholder3.PNG";
import imagePlaceHolder4 from "../../assets/imagePlaceholder4.PNG";
import imagePlaceHolder5 from "../../assets/imagePlaceholder5.PNG";

import classes from "./ModelCardsContainer.module.css";

const DummyData = [
   {
      imageSrc: imagePlaceHolder,
      userImageSrc: imagePlaceHolder,
      modelTitle: "Crazy Snowball jumping",
      viewsCount: 5,
      commentsCount: 10,
      likesCount: 7,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder2,
      userImageSrc: imagePlaceHolder2,
      modelTitle: "Crazy Snowball running and jumping",
      viewsCount: 55,
      commentsCount: 5,
      likesCount: 1,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder3,
      userImageSrc: imagePlaceHolder3,
      modelTitle: "Crazy Snowball barking",
      viewsCount: 0,
      commentsCount: 0,
      likesCount: 0,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder4,
      userImageSrc: imagePlaceHolder4,
      modelTitle: "o.O this is not Snowball?",
      viewsCount: 44,
      commentsCount: 0,
      likesCount: 0,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder5,
      userImageSrc: imagePlaceHolder5,
      modelTitle: "Snowball test",
      viewsCount: 7,
      commentsCount: 2,
      likesCount: 1,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder,
      userImageSrc: imagePlaceHolder,
      modelTitle: "Snowball test",
      viewsCount: 7,
      commentsCount: 2,
      likesCount: 1,
      user: "YusukeJoan"
   },
   {
      imageSrc: imagePlaceHolder,
      userImageSrc: imagePlaceHolder,
      modelTitle: "Snowball test",
      viewsCount: 7,
      commentsCount: 2,
      likesCount: 1,
      user: "YusukeJoan"
   }
];

const ModelCardsContainer = () => {
   const modelList = DummyData.map(model => {
      return (<li>
         <ModelCard {...model}/>
         </li>);
   });

   return <div className={classes.cardsContainer}>
      <ul>
         {modelList}
      </ul>
   </div>;
};

export default ModelCardsContainer;
