
import React from 'react'
import { About } from '../../components/About/About'
import { Heading } from '../../components/Heading/Heading'
import { Introduction } from '../../components/Introduction/Introduction'


const HomePage = () => {
  return (
    <div className={`container mx-auto border px-${10} border-sky-500`}>

        <Heading/>
        <Introduction/>
        <About />
    </div>
    
  )
}

export default HomePage