import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard.js"
import Nav from "./components/Nav.js";
import DisplayUsers from "./components/DisplayUsers.js";
import TeacherDetails from "./components/TeacherDetails.js";
import Login from "./components/Login.js";
import DisplayReviews from "./components/DisplayReviews.js";
import NewReviewForm from "./components/NewReviewForm.js";
import DisplayExtracurriculars from "./components/DisplayExtracurriculars.js";
import { StudentProvider } from "./context/StudentProvider.js"
import CreateAccount from "./components/CreateAccount.js"
import Letter from "./components/Letter.js"
import EditProfileForm from "./components/EditProfileForm";

function App() {
  const [students, setStudents] = useState([])
  const [teachers, setTeachers] = useState([])
  const [selectedHouse, setSelectedHouse] = useState('All')
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    fetch('/students')
    .then(res =>{
      if (res.ok) {
        res.json()
        .then(studentData => {
          setStudents(studentData)})
      }}
      ) 
  }, [])

  useEffect(() => {
    fetch('/teachers')
    .then(res => {
      if (res.ok) {
        res.json()
        .then(teacherData => {
          setTeachers(teacherData)})
      }})
  }, [])

  function handleNewSelection(house){
    setSelectedHouse(house)
  }

  function handleCheck(){
    setIsChecked(!isChecked)

    // if (isChecked){
    //   setTeachers(sortedTeachers)
    // } else {
    //   setTeachers(unsortedTeachers)
    // }
    // need to sort out this logic here
  }
  const sortedTeachers = [...teachers].sort((teacherA, teacherB) => ((teacherA.average_rating < teacherB.average_rating) ? 1 : ((teacherB.average_rating < teacherA.average_rating) ? -1 : 0)))

  const studentsToDisplay = students.filter(student => {
    if (selectedHouse === "All") return true;
    else if (selectedHouse === "Gryffindor") return student.house === 'Gryffindor';
    else if (selectedHouse === "Ravenclaw") return student.house === 'Ravenclaw';
    else if (selectedHouse === "Slytherin") return student.house === 'Slytherin';
    else if (selectedHouse === "Hufflepuff") return student.house === 'Hufflepuff';
    else return student.house === selectedHouse;
  })

  return (
    <div className="App">
      <StudentProvider>
      <header className="App-header">
        <br></br>
        <div className="title">✨ HOGWARTS.EDU ✨</div>
        <Nav/>
        <Routes>
          <Route path="/" element={<Dashboard/>}/>
          <Route path="/createaccount" element={<CreateAccount/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/students" element={<DisplayUsers onNewSelection={handleNewSelection} selectedHouse={selectedHouse} students={studentsToDisplay} inStudents={true}/>} />   
          <Route path="/teachers" element={<DisplayUsers teachers={teachers} inStudents={false} onCheck={handleCheck} isChecked={isChecked}/>} /> 
          <Route path="/extracurriculars" element={<DisplayExtracurriculars inStudents={false}/>}/>
          {/* make it so you cant see the leave this club button on this page - just number of members */}
          <Route path="/teachers/:id" element={<TeacherDetails teachers={teachers}/>} /> 
          {/* need to make it so cant delete off a teacher page and so you can only delete your own */}
          <Route path="/students/:id" element={<EditProfileForm students={students}/>} /> 
          <Route path="/students/:student_id/extracurriculars" element={<DisplayExtracurriculars inStudents={true}/>}/>
          <Route path="/students/:student_id/reviews" element={<DisplayReviews students={students}/>}/>
          <Route path="/students/:student_id/reviews/new" element={<NewReviewForm teachers={teachers}/>}/>
          <Route path="/students/:student_id/letter" element={<Letter/>}/>
        </Routes>
      </header>
      </StudentProvider>
    </div>
  );
}

export default App;