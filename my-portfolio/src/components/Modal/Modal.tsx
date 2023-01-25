import { ReactJSXElement } from '@emotion/react/types/jsx-namespace'
import { faCircleXmark, faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface Iprop {
  isDisplay: boolean
  children: ReactJSXElement
  close : ()=>void
  //blog:
}


export const Modal = ({isDisplay,close,children}:Iprop) => {
  return (
    <div className={`h-screen ${isDisplay ? "block" : "hidden"} absolute w-screen bg-slate-600 bg-opacity-75 flex items-center`}>
     <button onClick={close}> <FontAwesomeIcon icon={faCircleXmark} className='text-2xl absolute left-3/4 top-1/4'/></button>
        {children}
    </div>
  )
}
