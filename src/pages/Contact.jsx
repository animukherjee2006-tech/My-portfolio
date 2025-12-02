import React, { useState } from 'react'

function Contact() {
  const [hover,sethover]= useState(null)
  
  return (
<>
   
    <div  style={{width:"100%",height:"100vh",
      display:"flex",justifyContent:"center",alignItems:"center",
      backgroundColor:"#1E1B2E"
      }}>
        <div 
        onMouseEnter={()=>sethover(0)}
        onMouseLeave={() =>sethover(null)}
        style={{
         width:"50%",height:"50vh",margin:"1rem",border:" solid blue",color:"blue",display:"flex",alignContent:"center",borderRadius:"100px",
         backgroundColor:hover===0? "#1A1A40":"#6C5B7B"
        }}>
       <form 
      action="https://formsubmit.co/animukherjee2006@gmail.com" 
      method="POST"
      style={{
        width: "100%",
        maxWidth: "400px",
        height:"40vh",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        borderRadius:"10rem"
      }}
    >

      <input type="hidden" name="_captcha" value="false" />

      <input type="hidden" name="_next" value="https://yourwebsite.com/thankyou" />

      <input 
        type="text" 
        name="name" 
        placeholder="Your Name" 
        required
        style={{ padding: "10px", borderRadius: "5px" }}
      />

      <input 
        type="email" 
        name="email" 
        placeholder="Your Email" 
        required
        style={{ padding: "10px", borderRadius: "5px" }}
      />

      <textarea 
        name="message" 
        placeholder="Write your message..." 
        required
        style={{ padding: "10px", borderRadius: "5px", height: "120px" }}
      ></textarea>

      <button 
        type="submit"
        style={{
          padding: "12px",
          backgroundColor: "blue",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
          fontWeight: "bold"
        }}
      >
        Send Message
      </button>

    </form>
     </div>
     <div
        onMouseEnter={()=>sethover(1)}
        onMouseLeave={() =>sethover(false)}
        style={{
         width:"40%",height:"50vh",margin:"1rem",border:" solid blue",color:"white",textAlign:"center",justifyContent:"center",
         borderRadius:"100px",
         backgroundColor:hover===1? "#1A1A40":"#6C5B7B"
        }}>
          <p>OR</p>
    <p>Reach out directly</p>
    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=animukherjee2006@gmail.com"
    target="_blank"
  rel="noopener noreferrer"
    style={{color:"white"}}>animukherjee2006@gmail.com</a>
     </div>
</div>
</>
  )
}

export default Contact