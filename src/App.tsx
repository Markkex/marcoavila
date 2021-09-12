import React from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Main from "./Components/Main";
import Menu from "./Components/Menu";
import Work from "./Components/Work";

function App() {
  return (
    <div className='App'>
      <div className='bg'></div>
      <Menu />
      <Main />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
