import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeftLong} from "@fortawesome/free-solid-svg-icons";
import { faRightLong} from "@fortawesome/free-solid-svg-icons";
import React from 'react'
import logo from '../../../../assets/LOGO.png'
export const CalenderHeader = () => {
  return (
    <header className="px-4 py-2 flex item-center">
        <img src={logo} alt={'calender'} className={`mr-2 w-12 h-12`}/>
        <h1 className={`mr-10 text-xl text-gray-500 font-bold`}> calender</h1>
        <button className="border rounded py-2 px-4 mr-5">
            Today
        </button>
        <button>
            <span className={`cursor-pointer text-gray-600 mx-2`}> 
                <FontAwesomeIcon icon={faLeftLong}/>
            </span>

            <span className={`cursor-pointer text-gray-600 mx-2`}> 
                <FontAwesomeIcon icon={faRightLong}/>
            </span>
        </button>
    </header>
  )
}
