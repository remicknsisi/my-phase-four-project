import React, { useState, useEffect } from "react";

const StudentContext = React.createContext();

const StudentProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null)
    console.log(currentUser)

    useEffect(() => {
        fetch("http://localhost:3000/me")
        .then((res) => {
          if (res.ok) {
            res.json().then((user) => setCurrentUser(user))
          }})
      }, [])

      const login = (user) => {setCurrentUser(user)}

      const logout = () => {setCurrentUser(null)}

      const signup = (newStudent) => {setCurrentUser(newStudent)}

    return (
        <StudentContext.Provider value={{currentUser, login, logout, signup}}>
            {children}
        </StudentContext.Provider>
    )
}

export { StudentProvider, StudentContext }