import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Extracurricular ({ extracurricular, allExtracurriculars }) {
    const { name, image, about, number_of_members, id } = extracurricular
    const { handleLeaveClub, currentUser } = useContext(StudentContext)

    function onLeaveClub(){
        const deletedSignup = currentUser.signups.find(signup => signup.extracurricular_id == id)
        fetch(`/signups/${deletedSignup.id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedSignup => handleLeaveClub(deletedSignup))
        }

    function onJoinClub(){
        const newSignup = {
            extracurricular_id: id,
            student_id: currentUser.id
        }

        fetch(`/signups`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                newSignup
            )
        })
        .then(res => res.json())
        .then(newSignup => console.log(newSignup))
    }


    // fetch(`/students/${student_id}/reviews`, {
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(
    //       newReview
    //     )
    //   })
    //   .then(res => {
    //     if(res.ok){
    //         res.json().then((newReview) => {
    //             handleSubmitReview(newReview)
    //             setNewComment('')
    //             setNewRating()
    //             setNewTeacherId()
    //             navigate(`/students/${student_id}/reviews`)})
    //     } else {
    //         res.json().then((message) => {
    //             const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
    //             setErrorsList(errorLis)
    //         })
    //     }
    // }

    return (
        <div className="associated-card">
            <img className="club-img" src={image}/>
            <h3>About: {name}</h3>
            <p>{about}</p>
            {allExtracurriculars ? <button onClick={onJoinClub}>Join this Club</button> : <button onClick={onLeaveClub}>Leave this Club</button>}
        </div>
    )
}

export default Extracurricular;