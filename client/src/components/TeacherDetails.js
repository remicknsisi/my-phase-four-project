import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review.js"

function TeacherDetails ({ teachers, onDeleteReview }) {
    const [teacher, setTeacher] = useState({})
    const { id } = useParams()

    useEffect(() => {
        fetch(`/teachers/${id}`)
        .then(res => res.json())
        .then(teacherData => setTeacher(teacherData))
    }, []) 

    return (
        <div className="card-details">
            <h1>{teacher.name}</h1>
            <img className="user-image" src={teacher.image}/>
            <br/>
            Contact: {!teacher.name ? null : teacher.name.replace(/ /g, '').toLowerCase() + '@hogwarts.edu'}
            <h2>{teacher.house}</h2>
            <h3>Classes taught this Academic Term:</h3>
                {teacher.classes}
            <br/><br/><br/>
            <h2 className='dashboard-title'>Hear from other Students</h2>
                {teacher.id ? teacher.reviews.map(review => <Review review={review} key={review.id} teachers={teachers} students={teacher.students} onDeleteReview={onDeleteReview}/>)  : null}
        </div>
    )
}

export default TeacherDetails;