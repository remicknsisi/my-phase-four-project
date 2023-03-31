import React from "react";

function Student ({ student }) {
    const { house, id, image, name, reviews, spells, year } = student

    return (
        <div className="student-card">
            <h1>{name}</h1>
            <h2>House: {house} | Year: {year}</h2>
            <img src={image}></img>
        </div>
    )
}

export default Student;