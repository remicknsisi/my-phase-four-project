import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function Dashboard () {
    const { currentUser } = useContext(StudentContext)
    const navigate = useNavigate()

    if (currentUser){
        return (
            <div className="home">
                <h1 className='dashboard-title'>Welcome to Hogwarts, {currentUser.name}</h1>
                <br/>
                <img alt="user" src={currentUser.image} className='dashboard-image'/>
                <br/>
                <div className='dashboard-container'>
                    <button className="dashboard-tiles" onClick={() => navigate(`/students/${currentUser.id}/reviews`)}>
                        My Reviews
                    </button>
                    <button className="dashboard-tiles" onClick={() => navigate(`/students/${currentUser.id}/reviews/new`)}>
                        Rate My Professor
                    </button>
                    <button className="dashboard-tiles" onClick={() => navigate(`/students/${currentUser.id}/letter`)}>
                        Hogwarts Acceptance Letter
                    </button>
                    <button className="dashboard-tiles" onClick={() => navigate(`/students/${currentUser.id}/extracurriculars`)}>
                        My Extracurriculars
                    </button>
                    <button className="dashboard-tiles" onClick={() => navigate(`/students/${currentUser.id}`)}>
                        Edit My Profile
                    </button>
                </div>
            </div>
        )} else{
            return (
                <div>null</div>
            )
        }
}

export default Dashboard;