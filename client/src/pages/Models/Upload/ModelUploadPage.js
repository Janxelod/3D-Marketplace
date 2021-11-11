import React, {useState} from "react";

import UploadModelStep2 from "../../../components/2d-models/upload/UploadModelStep2";
import UploadModelStep1 from "../../../components/2d-models/upload/UploadModelStep1";

const ModelUploadPage = () => {
   const [uploadStep, setUploadStep] = useState(1);

   const uploadStep1Handler = () => {
      // HTTP POST REQUEST WITH THE NEW ENTRY CREATED
      // Go to step 2, after getting response from the http request, if succeed!!!
      setUploadStep(2);
   };

   const step1 = <UploadModelStep1 onClickUpload={uploadStep1Handler} />;
   const step2 = <UploadModelStep2 />;

   let currentStep = (() => {
      switch (uploadStep) {
         case 1:
            return step1;
         case 2:
            return step2;
      }
   })();

   return <React.Fragment>{currentStep}</React.Fragment>;
};

export default ModelUploadPage;
