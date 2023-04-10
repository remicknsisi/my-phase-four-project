import React from "react";
import { Link } from "react-router-dom";

function Teacher ({ teacher }) {
    const { house, id, image, name, specialty, average_rating } = teacher

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>House: {house} | Specialty: {specialty}</h2>
            <img className="user-image" src={image}></img>
            <br/>
            <Link to={`/teachers/${id}`}>Read More</Link>
            <h2>Rating: {'✨'.repeat(average_rating)}</h2>
        </div>
    )
}

export default Teacher;