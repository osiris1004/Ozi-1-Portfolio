import React from 'react'
interface Iprops{
    pageNumber : number
    headingText :string
}
export const PagesHeading = ({pageNumber,headingText}:Iprops) => {
  return (
       <div className={`flex  border-sky-500  mb-10 text-gray-400 `}>
        <div className=" border-green-500 whitespace-nowrap font-semibold text-lg">
          <span className={`text-green-600 fontKeyHead`}>{pageNumber}.</span><span className={`text-xl font-extrabold mx-2`}>{headingText}</span>
        </div>
        <div className=" border-green-500 basis-full flex items-center ">
          <hr className="border border-gray-500 bg-gray-500 w-full"></hr>
        </div>
      </div>
    
  )
}
