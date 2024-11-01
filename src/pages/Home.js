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
      <button className="btn" onClick={() => setCurrentPage("Projects")}>
        View My Projects
      </button>
    </div> 
  );
}

export default Home;
