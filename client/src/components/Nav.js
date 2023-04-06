import React, { useContext } from "react";
import { Navigate, NavLink } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function Nav() {
    const { currentUser, logout } = useContext(StudentContext)

    function handleLogout(){
        fetch("/logout",{
            method: "DELETE"
        })
        .then(() => {
            logout()
            Navigate('/login')
        })
    }

  if (currentUser) {
    return (
        <div className="nav">
            <NavLink to="/" className="nav-link">Dashboard</NavLink>
            <NavLink to="/students" className="nav-link">Fellow Students</NavLink>
            <NavLink to="/teachers" className="nav-link">Your Teachers</NavLink>
            <NavLink to="/extracurriculars" className="nav-link">Extracurriculars</NavLink>
            <button onClick={handleLogout}>Logout</button>
        </div>
        );
    } else {
        return (
            <div className="nav">
                <NavLink to="/login" className="nav-link">
                    <button>Login</button>
                </NavLink>
            </div>
        )
    }
}

export default Nav;