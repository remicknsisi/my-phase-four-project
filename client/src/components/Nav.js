import React from "react";
import { NavLink } from "react-router-dom";

function Nav() {

    function handleLogout({ onLogout }) {
        fetch("/logout", {
          method: "DELETE",
        })
        .then(() => onLogout())
      }

  return (
    <div className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/students" className="nav-link">Students</NavLink>
        <NavLink to="/teachers" className="nav-link">Teachers</NavLink>
        <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Nav;