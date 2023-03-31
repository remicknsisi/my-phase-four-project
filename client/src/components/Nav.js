import React from "react";
import { NavLink, Link } from "react-router-dom";

function Nav({ onLogout, user }) {
    console.log(user)
    console.log(user.id)

    function handleLogout() {
        fetch("/logout", {
          method: "DELETE",
        })
        .then(() => onLogout())
      }

  return (
    <div className="nav">
        <NavLink to="/" className="nav-link">Home</NavLink>
        <NavLink to="/students" className="nav-link">Fellow Students</NavLink>
        <NavLink to="/teachers" className="nav-link">Your Teachers</NavLink>
        {(user.id) ? <button onClick={handleLogout}>Logout</button> : <Link to={`/login`}>Login Here</Link>}
    </div>
  );
}

export default Nav;