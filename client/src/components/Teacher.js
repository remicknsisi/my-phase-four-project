import React from "react";
import { Link } from "react-router-dom";

function Teacher ({ teacher }) {
    const { house, id, image, name, reviews, specialty, classes } = teacher

    return (
        <div className="teacher-card">
            <h1>{name}</h1>
            <h2>House: {house} | Specialty: {specialty}</h2>
            <img src={image}></img>
            <br/>
            <Link to={`/teachers/${id}`}>Read More</Link>
        </div>
    )
}

export default Teacher;