import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Extracurricular ({ extracurricular }) {
    const { name, image, about, number_of_members, id } = extracurricular
    const { handleLeaveClub } = useContext(StudentContext)

    function onLeaveClub(){
        handleLeaveClub(extracurricular)
    }

    return (
        <div className="associated-card">
            <img className="club-img" src={image}/>
            <h3>About: {name}</h3>
            <p>{about}</p>
            <button onClick={onLeaveClub}>Leave this Club</button>
        </div>
    )
}

export default Extracurricular;