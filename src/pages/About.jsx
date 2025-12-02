import React from 'react';

function About() {
  return (
    <div
      style={{
        width: "100%",
        minHeight: "70vh",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
        color: "black",
        backgroundColor:"blue",
        gap: "1rem",
        fontFamily: "'Montserrat', sans-serif"
      }}
    >
      <p>
        Hi, I’m Ani Mukherjee — a self-taught frontend developer and a 2nd-year CSE student.  
        I love creating modern, fast, and user-friendly web interfaces using the latest technologies.
      </p>

      <p style={{color:"yellow"}}>I’m experienced in:</p>
      <ul style={{ listStyleType: "circle", alignContent:"center", display: "inline-block" ,color:"red"}}>
        <li>HTML, CSS, JavaScript</li>
        <li>React and modern UI design</li>
        <li>Node.js (basic backend)</li>
        <li>C++ and DSA for problem solving</li>
      </ul>

      <p>
        I enjoy working on projects that challenge me and help me grow.  
        Some of my projects include a Calculator App, Weather App, and a fully responsive portfolio website.
      </p>

      <p>
        I’m currently exploring full-stack development and sharpening my DSA skills for interviews.
      </p>

      <p>
        My goal is to secure a software development internship where I can learn, build, and contribute to real-world projects.
      </p>
    </div>
  );
}

export default About;
