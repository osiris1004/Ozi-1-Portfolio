import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBarsProgress } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faSquareMinus } from "@fortawesome/free-solid-svg-icons";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../Redux/hooks";
import {
  setDeleteEventData,
  setSaveEventData,
  setSelectedEvent,
  setShowEvent,
  setUpdateEventData,
} from "../../Redux/globalRedux/Action";
import { title } from "process";

const labelsClass : string[]= ["bg-indigo-900","bg-gray-900","bg-green-900","bg-blue-900","bg-red-900", "bg-purple-900"];

//"indigo", "gray", "green", "blue", "red", "purple"

export const EventModal = () => {
  const daySelected = useAppSelector((state) => state.global.daySelected);
  const selectedEvent = useAppSelector((state) => state.global.selectedEvent);

  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [selectedLabel, setSelectedLabel] = useState(`labelsClass[0]`);

  useEffect(() => {
    setTitle(selectedEvent?.title);
    setDescription(selectedEvent?.description);
    console.log(selectedEvent?.id);
  }, [selectedEvent]);

  const cl = 'red'
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
          {selectedEvent && (
            <span
              className={" text-gray-"}
              onClick={() => {
                dispatch(setDeleteEventData(selectedEvent.id));
                dispatch(setShowEvent(false));
                dispatch(setSelectedEvent(null));
              }}
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          )}
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
              <p>
                {daySelected.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              </p>
            </span>

            <span className={`text-gray-400`}>
              <FontAwesomeIcon icon={faSquareMinus} />
            </span>
            <input
              type={`text`}
              name={`title`}
              placeholder={`Add Description`}
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              required
              className={`pt-3 border-0 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500 `}
            />

            <span className={`text-gray-400`}>
              <FontAwesomeIcon icon={faBookmark} />
            </span>

            <div className="flex gap-x-2">
              {labelsClass.map((lbClass, i) => (
                <span
                  key={i}
                  onClick={() => setSelectedLabel(lbClass)}
                  className={`${lbClass} w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                
                  {selectedLabel === lbClass && (
                    <span className={`text-white text-sm`}>
                      <FontAwesomeIcon icon={faCheck} />
                    </span>
                  )}
                  
                </span>
              ))}
            </div>
          </div>
        </div>

        <footer className={`flex justify-end border-t p-3 mt-5`}>
          {selectedEvent && (
            <button
              type="submit"
              className={`bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white`}
              onClick={(event) => {
                event.preventDefault();
                dispatch(
                  setUpdateEventData({
                    id: selectedEvent.id,
                    title: title,
                    description: description,
                    selectedLabel: selectedLabel,
                    day: daySelected,
                  })
                );
                dispatch(setShowEvent(false));
                dispatch(setSelectedEvent(null));
              }}
            >
              Edit
            </button>
          )}
          {!selectedEvent && (
            <button
              
              className={`bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white`}
              onClick={(event) => {
                event.preventDefault();
                dispatch(
                  setSaveEventData({
                    title: title,
                    description: description,
                    selectedLabel: selectedLabel,
                    day: daySelected,
                  })
                );
                dispatch(setShowEvent(false));
              }}
            >
              Save
            </button>
          )}
        </footer>
      </form>
    </div>
  );
};
