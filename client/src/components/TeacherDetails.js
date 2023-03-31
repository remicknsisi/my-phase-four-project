import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function TeacherDetails () {
    const [teacher, setTeacher] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:3000/teachers/${id}`)
        .then(res => res.json())
        .then(teacherData => setTeacher(teacherData))
    }, []) 

    return (
        <div className="teacher-card-details">
            <h1>{teacher.name}</h1>
            <img src={teacher.image}/>
            <h2>{teacher.house}</h2>
            <h3>Classes being taught this Academic Term:</h3>
                {teacher.classes}
            <h3>Reviews</h3>
        </div>
    )
}

export default TeacherDetails;