import React, { useState, useContext, useEffect } from "react";
import Extracurricular from "./Extracurricular.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayExtracurriculars ({ inStudents }) {
    const { currentUser } = useContext(StudentContext)
    const [extracurriculars, setExtracurriculars] = useState([])

    useEffect(() => {
        fetch('/extracurriculars')
        .then(res => {
          if (res.ok) {
            res.json()
            .then(extracurricularData => {
              setExtracurriculars(extracurricularData)})
          }})
      }, [])

    return (
        <div className="cards-header">
            {inStudents ? 
                <>
                    <h2>My Extracurriculars</h2>
                    {currentUser.extracurriculars.map(extracurricular => <Extracurricular extracurricular={extracurricular} key={extracurricular.id}/>)}
                </>
            :
                <>
                    <h2>All Extracurriculars</h2>
                    {extracurriculars.map(extracurricular => <Extracurricular extracurricular={extracurricular} key={extracurricular.id}/>)}
                </>
            }
        </div>
    )
}

export default DisplayExtracurriculars;