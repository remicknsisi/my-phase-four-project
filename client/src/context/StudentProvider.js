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
  }
  function handleDeleteReview(deletedReview){
    const updatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const userWithUpdatedReviews = {...currentUser, reviews: updatedReviews}
    setCurrentUser(userWithUpdatedReviews)
  }
  function handleLeaveClub(club){
    const updatedClubs = currentUser.extracurriculars.filter(extracurricular => extracurricular.id !== club.id)
    const userWithUpdatedClubs = {...currentUser, extracurriculars: updatedClubs}
    setCurrentUser(userWithUpdatedClubs)
  }

  return (
    <StudentContext.Provider value={{currentUser, login, logout, signup, handleDeleteReview, handleSubmitReview, handleLeaveClub}}>
      {children}
    </StudentContext.Provider>
  )
}

export { StudentProvider, StudentContext }