import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard ({ user }) {
    const navigate = useNavigate()

    function handleReviewsClick(){
        navigate(`/students/${user.id}/reviews`)
    }

    return (
        <div className="home">
            {user.id ? <h1>Welcome to Hogwarts, {user.name}</h1> : <p>Please sign in</p>}
            <img src={user.image}/>
            <div className='dashboard-container'>
                <button className="dashboard-tiles" onClick={handleReviewsClick}>
                    My Reviews
                </button>
                <button className="dashboard-tiles">
                    Rate My Professor
                </button>
                <button className="dashboard-tiles">
                    Hogwarts Acceptance Letter
                </button>
                <button className="dashboard-tiles">
                    My Classes
                </button>
            </div>
        </div>
    )
}

export default Dashboard;