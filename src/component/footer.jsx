import React from 'react'
import { useNavigate } from 'react-router-dom'
import github from '../assets/github.jpeg'
import linkdin from '../assets/linkdin.jpeg'

function footer() {

  return (
    <div style={{width:"100%",height:"40vh",backgroundColor:"black",color:"white",textAlign:"center",display:"flex",flexDirection:"column",
     paddingTop:"50px",
      border:"1px solid white"
    }}>
        <div style={{justifyContent:"space-between"}}>
            <button style={{backgroundColor:"black",borderRadius:"30px",color:"white",border:"1px solid white" }}
            onClick={ () => window.scrollTo({ top: 0, behavior: "smooth" })}
            >Top</button>
        </div >
 <div style={{width:"100%",height:"15vh",marginTop:"10%",justifyContent:"center",gap:"5rem",display:"flex",padding:"5px",color:"white",cursor:"pointer"}}>
 <div style={{width:"10%"}}>
  <a href="https://www.linkedin.com/in/aniruddha-mukherjee-64129a375?utm_source=share&utm_campaign=share_via&utm_
  content=profile&utm_medium=android_app">
  <img src={linkdin} alt="linkdin" style={{width:"40px",height:"40px",objectFit:"contain",borderRadius:"15%"}} />
  </a>
  </div>

   <div style={{width:"10%"}}>
  <a href="https://animukherjee2006-tech.github.io">
  <img src={github} alt="github" style={{width:"40px",height:"40px",objectFit:"contain",borderRadius:"15%"}} />
  </a>
  </div>

 </div>
        <p>© 2025</p>
        </div>
  )
}

export default footer