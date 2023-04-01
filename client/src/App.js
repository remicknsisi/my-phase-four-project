import React, { useState, useEffect } from "react";
import { useNavigate, Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js"
import Nav from "./components/Nav.js";
import DisplayUsers from "./components/DisplayUsers.js";
import TeacherDetails from "./components/TeacherDetails.js";
import StudentDetails from "./components/StudentDetails.js";
import Login from "./components/Login.js";
import Reviews from "./components/Reviews.js";

function App() {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [currentUser, setCurrentUser] = useState({})

  const navigate = useNavigate()

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

  useEffect(() => {
    fetch("/me")
    .then((res) => {
      if (res.ok) {
        res.json().then((user) => setCurrentUser(user))
      }})
  }, [])

  function handleLogin(user){
    setCurrentUser(user)
    navigate('/')
  }

  function handleLogout(){
    setCurrentUser({})
  }

  function handleDeleteReview(deletedReview){
    const updatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const userWithUpdatedReviews = {...currentUser, reviews: updatedReviews}
    setCurrentUser(userWithUpdatedReviews)
  }

  return (
    <div className="App">
      <header className="App-header">
        <br></br>
        <div className="title">HOGWARTS.EDU</div>
        <Nav onLogout={handleLogout} user={currentUser}/>
        <Routes>
          <Route path="/" element={<Dashboard user={currentUser}/>}/>
          <Route path="/login" element={<Login onLogin={handleLogin}/>}/>
          <Route path="/students" element={<DisplayUsers students={students} inStudents={true}/>} />   
          <Route path="/teachers" element={<DisplayUsers teachers={teachers} inStudents={false}/>} /> 
          <Route path="/teachers/:id" element={<TeacherDetails/>} />   
          <Route path="/students/:id" element={<StudentDetails/>} />   
          <Route path="/students/:id/reviews" element={<Reviews onDeleteReview={handleDeleteReview} user={currentUser}/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
