
import React, { useState } from 'react'
import { About } from '../../components/About/About'
import { Clock } from '../../components/Clock/Clock'
import { Contact } from '../../components/Contact/Contact'
import { Heading } from '../../components/Heading/Heading'
import { Introduction } from '../../components/Introduction/Introduction'
import { Menu } from '../../components/Menu/Menu'
import { MyProjects } from '../../components/MyProjects/MyProjects'
import { WorkedSites } from '../../components/WorkedSites/WorkedSites'
import { Faq } from '../Faq/Faq'


const HomePage = () => {
  const [dMenu, setDMenu] = useState<boolean>(true)
  const displayMenu = ()=>{
    setDMenu(!dMenu)
  }
  return (
    <div className={`container mx-auto border px-${10} border-sky-500 pb-10`}>
       <div className={`relative`}>
       <div className={`absolute h-screen bg-[#092631]/[.9] w-full ${dMenu ? "hidden" : "block"} mt-3`}>
       <Menu handleMenu ={displayMenu }/>
       </div>
       <div className={`fixed bottom-0`}>
        <Clock/>
       </div>
        <Heading handleMenu ={displayMenu }/>
        <Introduction/>
        <About />
        <WorkedSites/>
        <MyProjects/>
        <Faq/>
        <Contact/>
       </div>
    </div>
    
  )
}

export default HomePage