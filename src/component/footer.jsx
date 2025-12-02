import React from 'react'
import { useNavigate } from 'react-router-dom'

function footer() {

  return (
    <div style={{width:"100%",height:"35vh",backgroundColor:"white"}}>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p>© 2025</p>
            <button style={{backgroundColor:"black",borderRadius:"30px",color:"white" }}
            onClick={ () => window.scrollTo({ top: 0, behavior: "smooth" })}
            >Top</button>
        </div >
        <div style={{textAlign:"center",color:"grey",fontSize:"50px"}}>
            <h1>LET'S TALK</h1>
        </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <div>
                <button style={{borderRadius:"30px",height:"5vh"}}> <a href="https://www.linkedin.com/in/a
                niruddha-mukherjee
                -64129a375?utm_source=
                share&utm_campaign=share_via&utm_content
                =profile&utm_medium=android_app"
                target='_blank'
                rel="noopener noreferrer">LINKEDIN</a></button>
                <a 
  href="https://github.com/animukherjee2006-tech" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <button style={{ borderRadius: "30px", height: "5vh" }}>
    GITHUB
  </button>
</a>
            </div>
            <h2>Designed by Aniruddha Mukherjee</h2>
        </div>
    </div>
  )
}

export default footer