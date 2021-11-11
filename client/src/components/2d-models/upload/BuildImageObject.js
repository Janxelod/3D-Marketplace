const buildImageObject = ({
   titleContent,
   descriptionContent,
   selectedCategory,
   tags,
   visibility,
   download,
}) => {
   const parsedObject = {
      name: titleContent,
      description: descriptionContent,
      tags,
      visibility,
      categories: [
         ...selectedCategory.map((el) => {
            return {name: el.label, slug: el.value};
         }),
      ],
      downloadType: download
   };

   return parsedObject;
};

export default buildImageObject;
