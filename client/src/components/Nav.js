import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav({ onLogout, user }) {

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        })
        .then(() => onLogout())
      }

  return (
    <div className="nav">
        <NavLink to="/" className="nav-link">Dashboard</NavLink>
        <NavLink to="/students" className="nav-link">Fellow Students</NavLink>
        <NavLink to="/teachers" className="nav-link">Your Teachers</NavLink>
        <NavLink to="/extracurriculars" className="nav-link">Extracurriculars</NavLink>
        {(user.id) ? <button onClick={handleLogout}>Logout</button> : <NavLink to={`/login`} className="nav-link">Login</NavLink>}
    </div>
  );
}

export default Nav;