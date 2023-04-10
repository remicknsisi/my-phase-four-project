import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function Extracurricular ({ extracurricular, allExtracurriculars }) {
    const { name, image, about, number_of_members, id } = extracurricular
    const { handleLeaveClub, currentUser, handleJoinClub } = useContext(StudentContext)
    const navigate = useNavigate()

    function onLeaveClub(){
        const deletedSignup = currentUser.signups.find(signup => signup.extracurricular_id === id)
        fetch(`/signups/${deletedSignup.id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedSignup => handleLeaveClub(deletedSignup))
        }

    function onJoinClub(){
        fetch(`/signups`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {extracurricular_id: id}
            )
        })
        .then(res => {
            if (res.ok){
                res.json().then(newSignup => {
                    handleJoinClub(newSignup)
                    navigate(`/students/${currentUser.id}/extracurriculars`)}
                )}
            else {
                res.json().then(message => {
                    const errorLis = message.errors
                    console.log(errorLis)
                    // setErrorsList(errorLis)
                })
        }})
    }

    return (
        <div className="associated-card">
            <img alt="club" className="club-img" src={image}/>
            <h3>About: {name}</h3>
            <p>{about}</p>
            {allExtracurriculars ? <button onClick={onJoinClub}>Join this Club</button> : <button onClick={onLeaveClub}>Leave this Club</button>}
        </div>
    )
}

export default Extracurricular;