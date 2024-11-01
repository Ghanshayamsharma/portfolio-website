import React from "react";
import "./About.css";

function About() {
  const skills = [
    "JavaScript",
    "React",
    "Python",
    "Django",
    "HTML/CSS",
    "Git/GitHub"
  ];

  return (
    <div className="about">
      <h1>About Me</h1>
      <p>
        Welcome to my portfolio! I am a passionate developer with a background in computer science.
        I love building web applications and exploring new technologies.
      </p>
      <p>
        My journey in programming started in school, and I have since developed a variety of projects, 
        from simple applications to more complex systems. I enjoy solving problems and creating user-friendly experiences.
      </p>
      <p>
        In my free time, I like to learn new programming languages, contribute to open-source projects, and read about tech trends.
      </p>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default About;
