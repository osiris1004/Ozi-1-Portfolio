import React from "react";

export const WorkedSites = () => {
  return (
    <div className={`border border-red-500 w-2/4 m-auto flex`}>
      {/* scrolled list */}
      <div className={`border border-blue-500 pl-3 pr-5`}>
        <div className={`border border-green-500  py-1`}>Upstatement</div>
        <div className={`border border-green-500  py-1`}>Scout</div>
        <div className={`border border-green-500  py-1`}>Apple</div>
        <div className={`border border-green-500  py-1`}>Scout</div>
        <div className={`border border-green-500  py-1`}>Starry</div>
        <div className={`border border-green-500  py-1`}>MullenLowe</div>
      </div>
      {/* Display view from scrolled list  */}
      <div className={`border border-blue-500 `}>
        <p className={`font-medium`}>
          Engineer @ Upstatement 
           
        </p>
        <p>May 2018 - Present</p>
        <div className={`border border-red-500 flex font-medium pt-1`}>
              <p>*</p>
              <p className={`border mx-2`}>Write modern, performant,
          maintainable code for a diverse array of client and internal projects</p>
            </div>

            <div className={`border border-red-500 flex font-medium pt-1`}>
              <p>*</p>
              <p className={`border mx-2`}>Work with a variety of different languages, platforms, frameworks, and
          content management systems such as JavaScript, TypeScript, Gatsby,
          React, Craft, WordPress, Prismic, and Netlify</p>
            </div>

            <div className={`border border-red-500 flex font-medium pt-1`}>
              <p>*</p>
              <p className={`border mx-2`}>Communicate with
          multi-disciplinary teams of engineers, designers, producers, and
          clients on a daily basis</p>
            </div>
      </div>
    </div>
  );
};
