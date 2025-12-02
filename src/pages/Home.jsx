import React from 'react'
import Ani from "../assets/Ani.jpg"
import { useNavigate } from 'react-router-dom'
import './Home.css';

function Home() {
    const navigate= useNavigate();
  return (
    <div style={{backgroundColor:"#0f172a",color:"#ffffff", width:"100%",height:"100vh",display:"flex",alignItems:"center",
        justifyContent:"center",
        gap:"5rem",margin:"0px"
    }}>
        
         <div className="electric-border">
        <img src={Ani} alt="Ani" />
      </div>
      <div>
            <h1>Welocome to my Portfolio</h1>
            <h2>Hello i am Aniruddha Mukherjee.a Btech cse student.passionated about growth and learning.</h2>
            <button onClick={() =>navigate("/contact")}
            style={{ color:"black",backgroundColor:"blue",width:"100px",height:"50px",borderRadius:"20%",border:"10px solid yellow"}}
            >contact me</button>
            </div>


    </div>
  )
}

export default Home