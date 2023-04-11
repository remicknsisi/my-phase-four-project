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
    navigate(`/students/${updatedStudent.id}/reviews`)
    // be consistent with where the nav logic is - next 3 functions handle in other components
  }
  function handleDeleteReview(deletedReview){
    const updatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const userWithUpdatedReviews = {...currentUser, reviews: updatedReviews}
    setCurrentUser(userWithUpdatedReviews)
  }
  function handleLeaveClub(deletedSignup){
    const updatedSignups = currentUser.signups.filter(signup => signup.id !== deletedSignup.id)
    const userWithUpdatedSignups = {...currentUser, signups: updatedSignups}
    setCurrentUser(userWithUpdatedSignups)
  }
  function handleJoinClub(newSignup){
    const studentUpdatedSignups = [...currentUser.signups, newSignup]
    const updatedStudent = {...currentUser, signups: studentUpdatedSignups}
    setCurrentUser(updatedStudent)
    // navigate(`/students/${currentUser.id}/extracurriculars`)
  }
  function handleEditStudent(updatedStudent){
    setCurrentUser(updatedStudent)
  }

  return (
    <StudentContext.Provider value={{currentUser, login, logout, signup, handleDeleteReview, handleSubmitReview, handleEditStudent, handleLeaveClub, handleJoinClub}}>
      {children}
    </StudentContext.Provider>
  )
}

export { StudentProvider, StudentContext }