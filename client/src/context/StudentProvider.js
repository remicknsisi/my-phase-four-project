import React, { useState, useEffect } from "react";

const StudentContext = React.createContext();

const StudentProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

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
    
  function handleDeleteReview(deletedReview){
    const updatedReviews = currentUser.reviews.filter(review => review.id !== deletedReview.id)
    const userWithUpdatedReviews = {...currentUser, reviews: updatedReviews}
    setCurrentUser(userWithUpdatedReviews)
  }

  return (
    <StudentContext.Provider value={{currentUser, login, logout, signup, handleDeleteReview}}>
      {children}
    </StudentContext.Provider>
  )
}

export { StudentProvider, StudentContext }