import React, { ReactComponentElement, ReactElement, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faSquarePersonConfined } from "@fortawesome/free-solid-svg-icons";
import { faHandPointLeft} from "@fortawesome/free-solid-svg-icons";
import { faHandPointRight} from "@fortawesome/free-solid-svg-icons";
import { PagesHeading } from "../PagesHeading/PagesHeading";
export const MyProjects = () => {

const slice = [<ComponentTest/>,<ComponentTest2/>,<ComponentTest3/>]

const [currentIndex, setCurrentIndex] = useState(0)

const goToNext = () =>{
  const islastSlice = currentIndex === slice.length - 1 ;
  const newIndex = islastSlice  ?  0:  currentIndex + 1;
  setCurrentIndex(newIndex)
}

const goToPrevious = () =>{
  const isFirstSlice = currentIndex === 0;
  const newIndex = isFirstSlice ? slice.length - 1 :  currentIndex-1;
  setCurrentIndex(newIndex)

}
  return (
    <div className={` border-red-500  md:w-8/12 m-auto h-screen flex items-center`}>
      <div>
        <PagesHeading pageNumber={3} headingText={'Some Things I ve Build'}/>
        <div className={` border-red-500 relative flex items-center`}>
        {slice[currentIndex]}
        <button onClick={()=>goToNext()} className={` border-red-500  right-0 absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}> <FontAwesomeIcon
                    icon={faHandPointRight}
                    style={{ color: "green", height:30 }}
                  /></button>
        <button onClick={()=>goToPrevious()} className={` border-red-500  absolute transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}><FontAwesomeIcon
                    icon={faHandPointLeft}
                    style={{ color: "green", height:30  }}
                  /></button>
        </div>

        {/* my algotith */}
       
      </div>
    </div>
  );
};

const ComponentTest = () => {
  return (
    <div>
      {/* img */}
      <div className={` border-green-500 relative `}>
        <div className={` border-red-500 absolute  inset-0 flex items-center`}>
          <div
            className={`bg-[#092631]/[.7] h-full flex items-center text-gray-500`}
          >
            <div className={`px-8`}>
              <p className={`fontKey text-green-500`}>Featured Project</p>
              <p className={`fontKeyHeadBoldLg text-gray-400`}>Halcyon Theme</p>
              <p className={`text mt-5`}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
              <div className={`text mt-5 fontKeySm`}>
                <span className={`text mr-3`}>VS Code</span>
                <span className={`text mr-3`}>Sublime Text</span>
                <span className={`text mr-3`}>Atom</span>
                <span className={`text mr-3`}>iTerm2</span>
                <span className={`text mr-3`}>Hyper</span>
              </div>
              <div className={`mt-5`}>
                <span style={{ fontSize: 30 }} className={``}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ color: "green" }}
                  />
                </span>
                <span style={{ fontSize: 30 }} className={`ml-5`}>
                  <FontAwesomeIcon
                    icon={faSquarePersonConfined}
                    style={{ color: "green" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="project img"
          src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png"
        />
      </div>
    </div>
  );
};

const ComponentTest2 = () => {
  return (
    <div>
      {/* img */}
      <div className={` border-green-500 relative `}>
        <div className={` border-red-500 absolute  inset-0 flex items-center`}>
          <div
            className={`bg-[#092631]/[.7] h-full flex items-center text-gray-500`}
          >
            <div className={`px-8`}>
              <p className={`fontKey text-green-500`}>Featured Project</p>
              <p className={`fontKeyHeadBoldLg text-gray-400`}>2 Theme</p>
              <p className={`text mt-5`}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
              <div className={`text mt-5 fontKeySm`}>
                <span className={`text mr-3`}>VS Code</span>
                <span className={`text mr-3`}>Sublime Text</span>
                <span className={`text mr-3`}>Atom</span>
                <span className={`text mr-3`}>iTerm2</span>
                <span className={`text mr-3`}>Hyper</span>
              </div>
              <div className={`mt-5`}>
                <span style={{ fontSize: 30 }} className={``}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ color: "green" }}
                  />
                </span>
                <span style={{ fontSize: 30 }} className={`ml-5`}>
                  <FontAwesomeIcon
                    icon={faSquarePersonConfined}
                    style={{ color: "green" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="project img"
          src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png"
        />
      </div>
    </div>
  );
};

const ComponentTest3 = () => {
  return (
    <div>
      {/* img */}
      <div className={` border-green-500 relative `}>
        <div className={` border-red-500 absolute  inset-0 flex items-center`}>
          <div
            className={`bg-[#092631]/[.7] h-full flex items-center text-gray-500`}
          >
            <div className={`px-8`}>
              <p className={`fontKey text-green-500`}>Featured Project</p>
              <p className={`fontKeyHeadBoldLg text-gray-400`}>Osiris Theme</p>
              <p className={`text mt-5`}>
                A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                iTerm, and more. Available on Visual Studio Marketplace, Package
                Control, Atom Package Manager, and npm.
              </p>
              <div className={`text mt-5 fontKeySm`}>
                <span className={`text mr-3`}>VS Code</span>
                <span className={`text mr-3`}>Sublime Text</span>
                <span className={`text mr-3`}>Atom</span>
                <span className={`text mr-3`}>iTerm2</span>
                <span className={`text mr-3`}>Hyper</span>
              </div>
              <div className={`mt-5`}>
                <span style={{ fontSize: 30 }} className={``}>
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    style={{ color: "green" }}
                  />
                </span>
                <span style={{ fontSize: 30 }} className={`ml-5`}>
                  <FontAwesomeIcon
                    icon={faSquarePersonConfined}
                    style={{ color: "green" }}
                  />
                </span>
              </div>
            </div>
          </div>
        </div>
        <img
          alt="project img"
          src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png"
        />
      </div>
    </div>
  );
};





