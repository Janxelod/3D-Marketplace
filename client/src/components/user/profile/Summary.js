import classes from "./Summary.module.css";

const Summary = ({userData}) => {
   const pixels = 8456526; //temp const
   const category = "Game developer"; //temp const
   const about = `Esta es la biografia de El Primero. Esta es la biografia de El Primero.  
   Esta es la biografia de El Primero. Esta es la biografia de El Primero. 
   Esta es la biografia de El Primero.`; //temp const

   const renderSkills = (skills) => {
      return (
         <ul className={classes.skillList}>
            {skills.map((skill) => {
               return <li key={skill.skillId}>{skill.value}</li>;
            })}
         </ul>
      );
   };

   return (
      <div className={classes.userSummary}>
         <div className={classes.contentBox}>
            <div className={`${classes.boxResume} ${classes.boxTheme}`}>
               <h3>About</h3>
               <p>{about || userData.biography}</p>
               <h3>Category</h3>
               <p>{category}</p>
               <h3>Member since</h3>
               <p>{userData.creationDate}</p>
            </div>
            <div className={`${classes.boxStats} ${classes.boxTheme}`}>
               <h3>Stats</h3>
               <p>
                  <span>{userData.views}</span> views
               </p>
               <p>
                  <span>{userData.likes}</span> likes
               </p>
               <p>
                  <span>{pixels}</span> pixels
               </p>
               <p>
                  <span>{userData.comments}</span> comments
               </p>
            </div>
         </div>
         <div className={`${classes.boxFooter} ${classes.boxTheme}`}>
            <h3>Skills</h3>
            {userData.skills && renderSkills(userData.skills)}
         </div>
      </div>
   );
};

export default Summary;
