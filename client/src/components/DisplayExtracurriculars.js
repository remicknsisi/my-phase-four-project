import React, { useContext } from "react";
import Extracurricular from "./Extracurricular.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayExtracurriculars () {
    const { currentUser } = useContext(StudentContext)
    const extracurriculars = currentUser.extracurriculars

    return (
        <div className="cards-header">
            <h2>My Extracurriculars</h2>
            {extracurriculars.map(extracurricular => <Extracurricular extracurricular={extracurricular} key={extracurricular.id}/>)}
        </div>
    )
}

export default DisplayExtracurriculars;