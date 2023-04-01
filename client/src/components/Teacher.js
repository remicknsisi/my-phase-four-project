import React from "react";
import { Link } from "react-router-dom";

function Teacher ({ teacher }) {
    const { house, id, image, name, reviews, specialty, classes } = teacher

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>House: {house} | Specialty: {specialty}</h2>
            <img className="user-image" src={image}></img>
            <br/>
            <Link to={`/teachers/${id}`}>Read More</Link>
        </div>
    )
}

export default Teacher;