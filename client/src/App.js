import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js"
import Nav from "./components/Nav.js";
import DisplayUsers from "./components/DisplayUsers.js";

function App() {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(studentData => setStudents(studentData))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Nav/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/students" element={<DisplayUsers students={students}/>} inStudents={true}/>   
          <Route path="/teachers" element={<DisplayUsers/>} inStudents={false}/>    
        </Routes>
      </header>
    </div>
  );
}

export default App;
