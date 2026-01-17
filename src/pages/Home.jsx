import React from 'react'
import Ani from "../assets/Ani.jpg"
import { useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
    const navigate= useNavigate();
  return (
    <div className='Homi'>
        
         <div className="electric-border">
        <img src={Ani} alt="Ani" />
      </div>
      <div>
            <h1>Welocome to my Portfolio</h1>
            <h2>Hello i am Aniruddha Mukherjee.a Btech cse student.passionated about growth and learning.</h2>
            <button onClick={() =>navigate("/contact")}
            style={{ color:"blue",backgroundColor:"black",width:"auto",height:"5vh",borderRadius:"7%",border:"1px solid blue",
              margin:"1%"
            }}
            >Start a Project</button>
            <button onClick={() =>navigate("/project")}
            style={{ color:"white",backgroundColor:"black",width:"auto",height:"5vh",borderRadius:"7%",border:"1px solid white",
              margin:"1%"
            }}
            >Browse Works</button>
            </div>


    </div>
  )
}

export default Home