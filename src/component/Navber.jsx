import React, { useEffect, useState } from 'react'
import Navbutton from './Navbutton';
import { useNavigate } from "react-router-dom";
import About from '../pages/About';
import Skills from '../pages/Skills';

function Navber() {

  const navigate=  useNavigate();
  const [show,setshow] = useState(true)
  const [lasscrolly, setlastscrolly] = useState(0)

  useEffect(() => {
    const handlescroll = () => {
      if(window.scrollY < lasscrolly){
        setshow(true)
      }else{
        setshow(false)
      }
      setlastscrolly(window.scrollY)
    }

    window.addEventListener("scroll",handlescroll)

    return () =>
      window.removeEventListener("scroll",handlescroll)
  },[lasscrolly])
    return (
    <div
    style={{
       width: "100%", height: "10vh",boxSizing:"border-box",
        backgroundColor: "#1e1e1e",color:"#ffffff" ,display: "flex",justifyContent: "space-between",
        fontSize:"20px",borderBottom:"1px solid blue",position:"fixed",top: show ? "0" : "-100vh",left:0,zIndex:1000
      }}
    >
        <div>Aniruddha Mukherjee</div>
        <Navbutton />

        {/* <BrowseRouter>
        <Routes>
          <Route path='/' element={<About/>}/>
          <Route path='/skills' element={<Skills/>}/>

        </Routes>
        </BrowseRouter> */}
    </div>
  )
}

export default Navber