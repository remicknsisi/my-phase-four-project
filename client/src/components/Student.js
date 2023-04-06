import React from "react";

function Student ({ student }) {
    const { house, id, image, name, year } = student

    return (
        <div className="card">
            <h1>{name}</h1>
            <h2>House: {house} | Year: {year}</h2>
            <img className="user-image" src={image}></img>
            <br/>
        </div>
    )
}

export default Student;