import React from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Project from "./Components/Project";

function App() {
  return (
    <div className='App'>
      <div className='bg'></div>
      <Menu />
      <Main />
      <Project />
      <Contact />
    </div>
  );
}

export default App;
