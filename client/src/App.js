import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import AllTeams from "./pages/AllTeams";
import Blog from "./pages/Blog";
import Dashboard from "./pages/Dashboard";
import Landing from "./pages/Landing";
import Project from "./pages/Project";

function App() {
  return (
    <div className="App">
      <Header />
      <AllTeams />
      <Blog />
      <Dashboard />
      <Landing />
      <Project />
    </div>
  );
}

export default App;
