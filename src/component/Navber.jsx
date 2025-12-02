import React from 'react'
import { useNavigate } from "react-router-dom";

function Navber() {

  const navigate=  useNavigate();
  return (
    <div
    style={{
       width: "100%", height: "25vh",
        backgroundColor: "#1e1e1e",color:"#ffffff" ,display: "flex",justifyContent: "space-between",
         fontSize:"25px"
      }}
    >
        <div>Aniruddha Mukherjee</div>
        <div >
         <button onClick={ ()=> navigate("/home")}
            >Home</button>
            <button
            onClick={() => navigate("/about")}
            >About</button>
            <button onClick={() =>navigate("/contact")}>Contact</button>
            <button onClick={() =>navigate("/education")}>Education</button>
            <button onClick={() => navigate("/project")}>Projects</button>
            <button onClick={() =>navigate("/skills")}>Skills</button>
        </div>
    </div>
  )
}

export default Navber