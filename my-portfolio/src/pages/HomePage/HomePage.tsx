
import React from 'react'
import { About } from '../../components/About/About'
import { Heading } from '../../components/Heading/Heading'
import { Introduction } from '../../components/Introduction/Introduction'
import { MyProjects } from '../../components/MyProjects/MyProjects'
import { WorkedSites } from '../../components/WorkedSites/WorkedSites'


const HomePage = () => {
  return (
    <div className={`container mx-auto border px-${10} border-sky-500`}>

        <Heading/>
        <Introduction/>
        <About />
        <WorkedSites/>
        <MyProjects/>
    </div>
    
  )
}

export default HomePage