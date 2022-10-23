import React from 'react'

export const MyProjects = () => {
  return (
    <div className={`border border-red-500 w-2/4 m-auto`}>
                  

            {/* img */}
            <div className={`border border-green-500 relative `}>
            <div className={`border border-red-500 absolute  inset-0 flex items-center`}>
                <div>
                <p>Featured Project</p>
                <p>Halcyon Theme</p>
                <p>A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.</p>
                <span>VS Code</span>
                <span>Sublime Text</span>
                <span>Atom</span>
                <span>iTerm2</span>
                <span>Hyper</span>
                </div>
            </div>
                <img alt='project img' src='https://halcyon-theme.netlify.app/static/demo-30184fa83cb4ab8fb7809cf95cc8aec3.png'/>
            </div>
    </div>
  )
}




