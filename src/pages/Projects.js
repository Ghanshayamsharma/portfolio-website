import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      name: "Project Tracker and Stock Picker Web Application",
      description: "A web app for tracking projects and stocks.",
      link: "#",
    },
    {
      name: "EcoGuard",
      description: "An environmental tracking app.",
      link: "#",
    },
    {
      name: "AI-Enhanced Speech-to-Text Application",
      description: "An AI-powered app for speech-to-text conversion.",
      link: "#",
    },
    {
      name: "Basic Chat Application",
      description: "A real-time chat application using Python and sockets.",
      link: "#",
    },
    {
      name: "URL Shortener",
      description: "A simple tool for shortening URLs.",
      link: "#",
    },
    {
      name: "Job Board Platform",
      description: "A platform for job listings and applications.",
      link: "#",
    },
  ];

  return (
    <div className="projects">
      <h2 className="projects-heading">My Projects</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h4>{project.name}</h4>
            <p>{project.description}</p>
            <a href={project.link} className="btn">View More</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
