import React from "react";

function Teacher ({ teacher }) {
    const { house, id, image, name, reviews, specialty, classes } = teacher

    return (
        <div className="teacher-card">
            <h1>{name}</h1>
            <h2>House: {house} | Specialty: {specialty}</h2>
            <img src={image}></img>
        </div>
    )
}

export default Teacher;