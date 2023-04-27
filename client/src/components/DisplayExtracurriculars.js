import React, { useState, useContext, useEffect } from "react";
import Extracurricular from "./Extracurricular.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayExtracurriculars ({ inStudents }) {
    const { currentUser } = useContext(StudentContext)
    const [student, setStudent] = useState(currentUser)
    //do i need this line 7
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

    //   console.log(currentUser.extracurriculars)
      console.log(currentUser)

    if (currentUser){
    return (
        <div className="cards-header">
            {inStudents ? 
                <>
                    <h2>My Extracurriculars</h2>
                    {currentUser.extracurriculars.map(extracurricular => <Extracurricular extracurricular={extracurricular} allExtracurriculars={false} key={extracurricular.id}/>)}
                </>
            :
                <>
                    <h2>All Extracurriculars</h2>
                    {extracurriculars.map(extracurricular => <Extracurricular extracurricular={extracurricular} allExtracurriculars={true} key={extracurricular.id}/>)}
                </>
            }
        </div>
    )} else {
        return (
            <div>null</div>
        )
    }
}

export default DisplayExtracurriculars;