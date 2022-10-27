import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { PagesHeading } from "../PagesHeading/PagesHeading";

export const WorkedSites = () => {
  return (
    <div
      className={`  border-red-500 sm:h-screen w-8/12  m-auto flex items-center text-gray-500`}
    >
      <div>
        <PagesHeading pageNumber={2} headingText={'Where i ve Worked'}/>
        <div className={` border-red-500 flex flex-wrap`}>
          {/* scrolled list */}
          <div className={` border-blue-500 pl-3 pr-5 sm:basis-1/3`}>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              Upstatement
            </div>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              Scout
            </div>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              Apple
            </div>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              Scout
            </div>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              Starry
            </div>
            <div className={`border-l border-green-500  py-1 px-2 fontKeySm`}>
              MullenLowe
            </div>
          </div>
          {/* Display view from scrolled list  */}
          <div className={` border-blue-500 mt-6 sm:mt-0 sm:basis-2/3`}>
            <p className={`font-medium textBold`}>Engineer @ Upstatement</p>
            <p className={`fontKeySm`}>May 2018 - Present</p>
            <div className={`mt-5`}>
              <div className={` border-red-500 flex font-medium pt-2 textSm`}>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: "green" }}
                  />
                </div>
                <p className={` mx-2`}>
                  Write modern, performant, maintainable code for a diverse
                  array of client and internal projects
                </p>
              </div>

              <div className={` border-red-500 flex font-medium pt-2 textSm`}>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: "green" }}
                  />
                </div>
                <p className={` mx-2`}>
                  Work with a variety of different languages, platforms,
                  frameworks, and content management systems such as JavaScript,
                  TypeScript, Gatsby, React, Craft, WordPress, Prismic, and
                  Netlify
                </p>
              </div>

              <div className={` border-red-500 flex font-medium pt-2 textSm`}>
                <div>
                  <FontAwesomeIcon
                    icon={faCaretRight}
                    style={{ color: "green" }}
                  />
                </div>
                <p className={` mx-2`}>
                  Communicate with multi-disciplinary teams of engineers,
                  designers, producers, and clients on a daily basis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
