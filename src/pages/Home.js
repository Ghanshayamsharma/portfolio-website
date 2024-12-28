import React from "react";
import "./Home.css";

function Home({ setCurrentPage }) {
  return (
    <div className="home">
      <h1>Welcome to My Portfolio!</h1>
      <h2>Your gateway to my projects and skills</h2>
      <p>
        Explore my work, learn about my background, and see how I can help
        bring your ideas to life!
      </p>
      <p>
        As a 4th-year Computer Science Engineering student specializing in backend development, I possess a strong 
        foundation in programming languages, data structures, and software engineering principles. With a keen interest in 
        building scalable and efficient software systems, I aim to secure a backend development role that leverages my skills 
        and provides opportunities for growth and learning. I am excited to apply my knowledge and expertise to contribute to 
        innovative projects and collaborate with cross-functional teams to deliver high-quality solutions.
      </p>
      <button className="btn" onClick={() => setCurrentPage("Projects")}>
        View My Projects
      </button>
    </div> 
  );
}

export default Home;
