import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function StudentDetails () {
    const [student, setStudent] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/students/${id}`)
        .then(res => res.json())
        .then(studentData => setStudent(studentData))
    }, []) 

    return (
        <div className="student-card-details">
            <h1>{student.name}</h1>
            <img src={student.image}/>
            <h2>{student.house}</h2>
        </div>
    )
}

export default StudentDetails;