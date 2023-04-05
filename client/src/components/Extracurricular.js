import React from "react";

function Extracurricular ({ extracurricular }) {
    const { name, image, about, number_of_members } = extracurricular

    function handleLeaveClub(){
        console.log('leaving club')
        // fetch(`/reviews/${id}`, {
        //     method: 'DELETE'})
        //   .then(res => res.json())
        //   .then(deletedReview => onDeleteReview(deletedReview))
        }

    return (
        <div className="associated-card">
            <img className="club-img" src={image}/>
            <h3>About: {name}</h3>
            <p>{about}</p>
            <button onClick={handleLeaveClub}>Leave this Club</button>
        </div>
    )
}

export default Extracurricular;