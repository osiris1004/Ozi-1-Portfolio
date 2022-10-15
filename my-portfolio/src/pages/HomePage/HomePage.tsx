
import React from 'react'
import { Heading } from '../../components/Heading/Heading'
import { Introduction } from '../../components/Introduction/Introduction'


const HomePage = () => {
  return (
    <div className={`container mx-auto border px-${10} border-sky-500`}>

        <Heading/>
        <Introduction/>
    </div>
    
  )
}

export default HomePage