import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function Dashboard () {
    const { currentUser } = useContext(StudentContext)
    const navigate = useNavigate()

    function handleReviewsClick(){
        navigate(`/students/${currentUser.id}/reviews`)
    }
    function handleRateClick(){
        navigate(`/students/${currentUser.id}/reviews/new`)
    }
    function handleExtracurricularClick(){
        navigate(`/students/${currentUser.id}/extracurriculars`)
    }
    if (!currentUser || currentUser.error){
        return (
            <h1>Please Log In or Sign Up.</h1>
        )
    } else {
        return (
            <div className="home">
                <h1 className='dashboard-title'>Welcome to Hogwarts, {currentUser.name}</h1>
                <br/>
                <img src={currentUser.image} className='dashboard-image'/>
                <br/>
                <div className='dashboard-container'>
                    <button className="dashboard-tiles" onClick={handleReviewsClick}>
                        My Reviews
                    </button>
                    <button className="dashboard-tiles" onClick={handleRateClick}>
                        Rate My Professor
                    </button>
                    <button className="dashboard-tiles">
                        Hogwarts Acceptance Letter
                    </button>
                    <button className="dashboard-tiles">
                        My Classes
                    </button>
                    <button className="dashboard-tiles" onClick={handleExtracurricularClick}>
                        My Extracurriculars
                    </button>
                </div>
            </div>
        )
    }
}

export default Dashboard;