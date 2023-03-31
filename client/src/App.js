import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home.js"
import Nav from "./components/Nav.js";
import DisplayUsers from "./components/DisplayUsers.js";
import TeacherDetails from "./components/TeacherDetails.js";
import StudentDetails from "./components/StudentDetails.js";
import Login from "./components/Login.js";

function App() {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [user, setUser] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/students')
    .then(res => res.json())
    .then(studentData => setStudents(studentData))
  }, [])

  useEffect(() => {
    fetch('http://localhost:3000/teachers')
    .then(res => res.json())
    .then(teacherData => setTeachers(teacherData))
  }, [])

  function handleLogin(user){
    console.log(user)
    // handle setting user state here
  }

  function handleLogout(){
    // handle setting user state here
  }

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="title">HOGWARTS.EDU</div>
        <Nav onLogout={handleLogout}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/students" element={<DisplayUsers students={students} inStudents={true}/>} />   
          <Route path="/teachers" element={<DisplayUsers teachers={teachers} inStudents={false}/>} /> 
          <Route path="/teachers/:id" element={<TeacherDetails/>} />   
          <Route path="/students/:id" element={<StudentDetails/>} />   
        </Routes>
      </header>
    </div>
  );
}

export default App;
