import React from 'react'
import project1 from "../assets/project1.jpg"

function Project() {
  return (
    <div style={{     width: "100%",
        minHeight: "100vh",
        backgroundColor: "blue",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}>
      <h1 style={{textAlign:"center",color:"black"}}>My Projects Are :</h1>
      <div style={{justifyContent:"center",width:"60%",minHeight:"60vh",backgroundColor:"orange",borderRadius:"10%",
        border:"10px solid red"
      }}>
      <div style={{width:"40%",height:"30vh"}}>
        <a href="https://animukherjee2006-tech.github.io/Calculator/" target="_blank" 
         rel="noopener noreferrer"><img src={project1} alt="project1"  style={{ width: "60%", height: "100%", 
           border:"1px solid red" ,borderRadius:"30px"}} /> </a>
           <p>A simple calvulator using html,css ,js</p>
      </div>
      </div>
    </div>
  )
}

export default Project