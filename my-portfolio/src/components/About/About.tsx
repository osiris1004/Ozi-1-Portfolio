import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from '@fortawesome/free-solid-svg-icons'
import React from "react";
import { PagesHeading } from "../PagesHeading/PagesHeading";

export const About = () => {
  return (
    <div className={` border-green-500 w-8/12   m-auto md:h-screen flex items-center`}>
     <div>
       {/* heading component that will be repeatably used  in different component*/}
      <PagesHeading pageNumber={2} headingText={'About me'}/>

      {/* text and image */}
      <div className={`flex flex-wrap sm:flex-nowrap `}>
        <div className={` border-sky-500 basis-12/12`}>
          <p className={` border-yellow-500 font-medium py-2 text-gray-500`}>
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </p>
          <p className={` border-yellow-500 font-medium py-2 text-gray-500`}>
            Fast-forward to today, and I’ve had the privilege of working at an
            advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients.
          </p>
          <p className={` border-yellow-500 font-medium py-2 text-gray-500`}>
            I also recently launched a course that covers everything you need to
            build a web app with the Spotify API using Node & React.
          </p>
          <p className={` border-yellow-500 font-medium py-2 text-gray-500`}>
            Here are a few technologies I’ve been working with recently:
          </p>
          {/* list of technologies */}
          <div className={`grid grid-cols-2 fontKeySm text-gray-500 mt-4  w-fit gap-3`}>
            <div className={`  border-red-500 flex font-medium box-content `}>
              <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>

            <div className={` border-red-500 flex font-medium `}>
            <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>

            <div className={` border-red-500 flex font-medium `}>
            <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>

            <div className={` border-red-500 flex font-medium `}>
            <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>

            <div className={` border-red-500 flex font-medium `}>
            <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>

            <div className={` border-red-500 flex font-medium`}>
            <div><FontAwesomeIcon icon={faCircleRight} style={{"color":"green"}}/></div>
              <p className={` mx-2`}>JavaScript (ES6+)</p>
            </div>
          </div>
        </div>
        <div className={`flex  border-sky-500 items-center px-8 py-8 sm:py-0`}>
          <img
            alt={"profile"}
            src={
              "https://brittanychiang.com/static/30a645f7db6038f83287d0c6042d3b2b/f9526/me.avif"
            }
          />
        </div>
      </div>
     </div>
    </div>
  );
};


