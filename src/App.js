import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Navbar />
      <main>
        <Home />
        <Projects />
      </main>
      <Footer />
    </div>
  );
}

export default App;
