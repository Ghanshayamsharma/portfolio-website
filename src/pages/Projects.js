import React from "react";
import ProjectCard from "../components/ProjectCard";

function Projects() {
  const projectData = [
    {
      title: "Project 1",
      description: "A short description of Project 1",
      imageUrl: "/path/to/image.jpg",
      link: "https://github.com/username/project1"
    },
    // Add more projects
  ];

  return (
    <div className="projects">
      {projectData.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </div>
  );
}

export default Projects;
