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
  const [currentUser, setCurrentUser] = useState({})

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user))
      }})
  }, [])

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
    setCurrentUser(user)
  }

  function handleLogout(){
    setCurrentUser({})
  }

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="title">HOGWARTS.EDU</div>
        <Nav onLogout={handleLogout} user={currentUser}/>
        <Routes>
          {/* set up logic here that if there is a user in state, then reutnr the dynamic welcome home page. if not, return the login form */}
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
