import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { faCircleMinus } from "@fortawesome/free-solid-svg-icons";
import { PagesHeading } from "../../components/PagesHeading/PagesHeading";

export const Faq = () => {
  const [display, setDisplay] = useState(true);

  return (
    <div className={` w-8/12 m-auto sm:h-screen flex items-center`}>
      <div className={`w-full`}>
        <PagesHeading pageNumber={4} headingText={'A frequently Asked Questions '}/>
        <div className={"flex flex-row justify-center"}>
          <div
            className={`text-center fontKeyHeadBoldLg  text-gray-400 mb-10 border-b-8 border-green-500 w-20 py-3`}
          >
            FAq
          </div>
        </div>
        <div
          className={`border border-green-500 rounded-lg text-gray-500 flex  py-5 px-5 shadow-2xl`}
        >
          <div className={` border-red-500 basis-full`}>
            <div className={`fontKeyHeadBoldLg text-gray-400`}>
              <h1>Halcyon Theme</h1>
            </div>
            <div className={`${display ? "hidden" : "block"} mt-3`}>
              Lorem ipsum dolor sit amet. Atque voluptas sed debitis nulla?
              Itaque eum nostrum tempore veniam. Ipsa, fugit! Aliquid, mollitia
              nostrum. Numquam quasi iusto temporibus quod. Modi culpa error
              incidunt expedita! Laboriosam laborum sint nulla cupiditate?
              Laudantium quas incidunt earum eos! Tempore maxime aliquid aliquam
              dolorem. Soluta quisquam accusamus quos beatae..
            </div>
          </div>
          <div className={` border-yellow-500 px-3 flex items-center`}>
            <button onClick={() => setDisplay(!display)}>
              {display ? (
                <FontAwesomeIcon
                  icon={faCirclePlus}
                  style={{ color: "green", width: 40, height: 40 }}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faCircleMinus}
                  style={{ color: "green", width: 40, height: 40 }}
                />
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
