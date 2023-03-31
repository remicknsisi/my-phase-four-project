import React from "react";
import Home from "./components/Home.js"
import Nav from "./components/Nav.js";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Home/>
      </header>
    </div>
  );
}

export default App;
