import React from 'react'
import project1 from "../assets/project1.jpg"

function Project() {
  return (
    <div style={{     width: "100%",
       height:"auto",
        justifyItems:"center",
        paddingTop:"10%",
       paddingBottom:"10%",
        backgroundColor: "black",
        color:"white"
      }}>
      <h1 style={{textAlign:"center"}}>PROJECTS</h1>
      <div style={{width:"80%",minHeight:"40vh",backgroundColor:"white",textAlign:"center",border:"1px solid blue" ,borderRadius:"30px"}}>
         
        <a href="https://animukherjee2006-tech.github.io/Calculator/" target="_blank" 
         rel="noopener noreferrer"><img src={project1} alt="project1"  style={{ width: "100%", height: "100%",borderRadius:"30px"}} /> 
           </a>
           <p style={{color:"black"}}>a simple Calculator using html ,css ,js</p>
           </div>
           <h1 style={{color:"ButtonFace"}}>MORE TO COME ................</h1>
      
    </div>
  )
}

export default Project