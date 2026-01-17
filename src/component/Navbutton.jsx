import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Navbutton.css'

function Navbutton() {

    const Navigate = useNavigate()
    const [open,setopen] = useState(false)

   const goTo = (path) => {
    Navigate(path)
    setopen(false)
   }
  return (
    
        <div className='navWraper'>

            {/*Main button */}
            <button className='menu-btn'
            onClick={() => setopen(!open)}>MENU</button>
            {open && (
                <div className='menu-overlay'>
                <div className='menu-box'>
                    <button className='close-btn' onClick={() => setopen(false)}>x</button>
                <ul>
         <li onClick={ ()=> goTo("/home")}
            >Home</li>
            <li
            onClick={() => goTo("/about")}
            >About</li>
            <li onClick={() =>goTo("/contact")}>Contact</li>
            <li onClick={() => goTo("/project")}>Projects</li>
            <li onClick={() =>goTo("/skills")}>Skills</li>
            </ul>
            </div>
            </div>
            )}

            </div>
  )
}

export default Navbutton