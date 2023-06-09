import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StudentContext = React.createContext();

const StudentProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    fetch("/me")
    .then((res) => {
    if (res.ok) {
      res.json().then((user) => setCurrentUser(user))
    }})
  }, [])

  const login = (user) => {setCurrentUser(user)}
  const logout = () => {setCurrentUser(null)}
  const signup = (newStudent) => {setCurrentUser(newStudent)}
  
  function handleSubmitReview (newReview){
    const studentUpdatedReviews = [...currentUser.reviews, newReview]
    const updatedStudent = {...currentUser, reviews: studentUpdatedReviews}
    setCurrentUser(updatedStudent)
  }
  function handleDeleteReview(deletedReview){
    const updatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const userWithUpdatedReviews = {...currentUser, reviews: updatedReviews}
    setCurrentUser(userWithUpdatedReviews)
  }

  function handleLeaveClub(deletedSignup){
    const updatedSignups = currentUser.signups.filter(signup => signup.id !== deletedSignup.id)
    const updatedExtracurriculars = currentUser.extracurriculars.filter(extracurricular => extracurricular.id !== deletedSignup.extracurricular_id)
    const updatedUser = {...currentUser, signups: updatedSignups, extracurriculars: updatedExtracurriculars}
    setCurrentUser(updatedUser)
  }
  function handleJoinClub(newSignup, extracurricular){
    const studentUpdatedSignups = [...currentUser.signups, newSignup]
    const studentUpdatedExtracurriculars = [...currentUser.extracurriculars, extracurricular]
    const updatedStudent = {...currentUser, signups: studentUpdatedSignups, extracurriculars: studentUpdatedExtracurriculars}
    setCurrentUser(updatedStudent)
  }

  function handleEditStudent(updatedStudent){
    setCurrentUser(updatedStudent)
  }
  function handleDeleteAccount(){
    fetch(`/students/${currentUser.id}`, {
      method: 'DELETE',
      headers: {"Content-Type": "application/json"}})
    .then(() => {
      navigate(`/login`)
      setCurrentUser(null)
      })
  }

  return (
    <StudentContext.Provider value={{currentUser, login, logout, signup, handleDeleteReview, handleSubmitReview, handleEditStudent, handleLeaveClub, handleJoinClub, handleDeleteAccount}}>
      {children}
    </StudentContext.Provider>
  )
}

export { StudentProvider, StudentContext }