import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquarePersonConfined } from '@fortawesome/free-solid-svg-icons'
export const MyProjects = () => {

  const value = [1,2,3,4]

  let currentIndex = 0 
  const next = (n: number)=>{
    console.log("currentIndex "+ currentIndex)

    // currentIndex < 0 ? currentIndex = value.length  : currentIndex = currentIndex+n
    // currentIndex> value.length-1 ? currentIndex = 0 : currentIndex = currentIndex+n

   if(n === -1){
    if(currentIndex <= 0 ){
      currentIndex = value.length 
      currentIndex = currentIndex+n
      console.log(value[currentIndex])
    }else{
      currentIndex = currentIndex+n
      console.log(value[currentIndex])
    }
   }else{

    if(currentIndex >= value.length-1  ){
      currentIndex = 0
     
      console.log(value[currentIndex])
    }else{
      currentIndex = currentIndex+n
      console.log(value[currentIndex])
    }

   }


  

  }

  

  return (
    <div
      className={` border-red-500 w-8/12 m-auto h-screen flex items-center`}
    >
      <div>
        {/* img */}
        <div className={` border-green-500 relative `}>
          <div
            className={` border-red-500 absolute  inset-0 flex items-center`}
          >
            <div className={`bg-[#092631]/[.7] h-full flex items-center text-gray-500`}>
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
                <span style={{"fontSize":30}} className={``}><FontAwesomeIcon icon={faArrowUpRightFromSquare} style={{"color":"green"}}/></span>
                <span style={{"fontSize":30}} className={`ml-5`}><FontAwesomeIcon icon={faSquarePersonConfined} style={{"color":"green"}}/></span>
                
                </div>
              </div>
              
            </div>
          </div>
          <img
            alt="project img"
            src="https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png"
          />
        </div>

        {/* my algotith */}
        <button onClick={()=>next(1)}>
          next
        </button>

        <button onClick={()=>next(-1)}>
          prev
        </button>
      </div>
    </div>
  );
};
