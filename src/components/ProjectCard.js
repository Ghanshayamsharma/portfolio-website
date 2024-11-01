import React from "react";

function ProjectCard({ title, description, imageUrl, link }) {
  return (
    <div className="project-card">
      <img src={imageUrl} alt={title} />
      <h2>{title}</h2>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
    </div>
  );
}

export default ProjectCard;
