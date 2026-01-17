import React from 'react'
import python from "../assets/python.jpeg"
import c from "../assets/c.jpeg"
import cpp from "../assets/c++.jpeg"
import css from "../assets/css.jpeg"
import dsa from "../assets/dsa.jpeg"
import express from "../assets/express.jpeg"
import js from "../assets/js.jpeg"
import mongo from "../assets/mongo.jpeg"
import nodejs from "../assets/nodejs.jpeg"
import mern from "../assets/mern.jpeg"
import react from "../assets/react.jpeg"
import './skills.css'

function Skills() {
  return (
    <div className='skll'>
      <div className='skl1'>
         <div className='cc'>
          <img  style={{width:"100%",height:"auto"}}src={c} alt="c" /></div>

          <div className='cppp'>
          <img  style={{width:"100%",height:"auto"}}src={cpp} alt="cpp" /></div>

          <div className='csss'>
          <img  style={{width:"100%",height:"auto"}}src={css} alt="css" /></div>

           <div className='jss'>
          <img  style={{width:"100%",height:"auto"}}src={js} alt="js" /></div>
          </div>
         <div className='skl2' >
          <div className='pythonn'>
          <img  style={{width:"100%",height:"auto"}}src={python} alt="python" /></div>

          <div className='mernn'>
          <img  style={{width:"100%",height:"auto"}}src={mern} alt="mern" /></div>

          <div className='nodejss'>
          <img  style={{width:"100%",height:"auto"}}src={nodejs} alt="nodejs" /></div>

          <div className='mongoo'>
          <img  style={{width:"100%",height:"auto"}}src={mongo} alt="mongo" /></div>
          
          </div>

          <div className='skl3'>
            <div className='dsa'>
          <img  style={{width:"100%",height:"auto"}}src={dsa} alt="dsa" /></div>
          
            <div className='react'>
          <img  style={{width:"100%",height:"auto"}}src={react} alt="react" />
          </div>
          </div>
    </div>
  )
}

export default Skills