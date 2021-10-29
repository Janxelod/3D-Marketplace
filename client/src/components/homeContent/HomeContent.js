import logoImage from "../../assets/logo.PNG";

import classes from "./HomeContent.module.css";

const HomeContent = () => {
   return (
      <div className={classes.home}>
         <div className={classes.content}>
            <p>
               Adducti sic fructus sic sumus enim sed benefici fructus gratiam quod
               amore beneficium ad quod spe ad enim amicitiam natura amicitiam
               beneficium propensi sed natura enim eius sed beneficium sed enim sed
               quod sic inest amore enim adducti in exigamus ipso faeneramur enim
               fructus sed amicitiam enim liberalitatem mercedis in amore amicitiam
               sumus natura fructus liberalesque expetendam putamus gratiam sed
            </p>
            <p>Liberalesque benefici ipso omnis mercedis exigamus propensi adducti
               sed sed ad amore exigamus putamus putamus liberalesque enim non enim
               sic sed enim amicitiam sed quod enim ut enim ipso quod liberalitatem
               liberalesque putamus propensi expetendam eius putamus exigamus non
               in.
            </p>
         </div>
         <div >
            <img className={classes["home-img"]} src={logoImage} alt="The logo of BocetoLab" />
         </div>
      </div>
   );
};

export default HomeContent;
