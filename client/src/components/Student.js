import React from "react";
import { Link } from "react-router-dom";

function Student ({ student }) {
    const { house, id, image, name, reviews, spells, year } = student

    return (
        <div className="student-card">
            <h1>{name}</h1>
            <h2>House: {house} | Year: {year}</h2>
            <img src={image}></img>
            <br/>
            <Link to={`/students/${id}`}>Read More</Link>
        </div>
    )
}

export default Student;