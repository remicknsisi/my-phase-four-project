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

    const reviews = teacher.reviews.map(review => <Review review={review} key={review.id} teachers={teachers} onDeleteReview={onDeleteReview}/> )

    return (
        <div className="card-details">
            <h1>{teacher.name}</h1>
            Contact: {!teacher.name ? null : teacher.name.replace(/ /g, '').toLowerCase() + '@hogwarts.edu'}
            <br/>
            <img className="user-image" src={teacher.image}/>
            <h2>{teacher.house}</h2>
            <h3>Classes taught this Academic Term:</h3>
                {teacher.classes}
            <h3>Reviews</h3>
                {reviews}
        </div>
    )
}

export default TeacherDetails;