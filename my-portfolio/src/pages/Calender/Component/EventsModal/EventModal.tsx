import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import { setShowEvent } from "../../Redux/globalRedux/Action";
import { title } from "process";

export const EventModal = () => {
  const [title, setTitle] = useState(``);
  const daySelected = useAppSelector((state) => state.global.daySelected);

  const dispatch = useAppDispatch();
  return (
    <div
      className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center`}
    >
      <form className={`bg-white rounded-lg shadow-2xl w-1/4`}>
        <header
          className={`bg-gray-100 px-4 py-2 flex justify-between items-center`}
        >
          <span className={`text-gray-400`}>
            <FontAwesomeIcon icon={faBarsProgress} />
          </span>
          <button>
            <span
              className={`text-gray-400`}
              onClick={() => dispatch(setShowEvent(false))}
            >
              <FontAwesomeIcon icon={faXmark} />
            </span>
          </button>
        </header>
        <div className="p-3">
          <div className="grig grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type={`text`}
              name={`title`}
              placeholder={`Add title`}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              required
              className={`pt-3 border-0 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 `}
            />

            <span className={`text-gray-400`}>
              <FontAwesomeIcon icon={faBarsProgress} />
              <p>{daySelected.toLocaleDateString("en-US", { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};
