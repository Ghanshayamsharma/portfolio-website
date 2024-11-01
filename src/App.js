import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import "./App.css"; // Optional: for global styles

function App() {
  const [currentPage, setCurrentPage] = useState("Home");

  // Function to render content based on current page
  const renderContent = () => {
    switch (currentPage) {
      case "Home":
        return <Home setCurrentPage={setCurrentPage} />; // Pass setCurrentPage
      case "About":
        return <About />;
      case "Projects":
        return <Projects />;
      case "Contact":
        return <Contact />;
      default:
        return <Home setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="App">
      {/* Passing setCurrentPage to Navbar to change pages dynamically */}
      <Navbar setCurrentPage={setCurrentPage} />
      
      {/* Main content area */}
      <main className="content">
        {renderContent()}
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
