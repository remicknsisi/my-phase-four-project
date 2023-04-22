import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review.js"

function TeacherDetails () {
    const [teacher, setTeacher] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/teachers/${id}`)
        .then(res => res.json())
        .then(teacherData => setTeacher(teacherData))
    }, []) 

    return (
        <div className="card-details">
            <div className="teacher-details-border">
                <h1>{teacher.name} ({teacher.house})</h1>
                <img alt="teacher" className="user-image" src={teacher.image}/>
                <br/>
                Contact: {!teacher.name ? null : teacher.name.replace(/ /g, '').toLowerCase() + '@hogwarts.edu'}
                <h3>Classes taught this Academic Term:</h3>
                    {teacher.classes}
            </div>
            <br/><br/><br/>
            <h2 className='dashboard-title'>Hear from other Students</h2>
                {teacher.id ? teacher.reviews.map(review => <Review review={review} key={review.id}/>)  : null}
        </div>
    )
}

export default TeacherDetails;