import React, { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import Review from "./Review.js";
import { StudentContext } from "../context/StudentProvider.js";

function TeacherDetails () {
    const [teacher, setTeacher] = useState({})
    const { id } = useParams()
    const { currentUser } = useContext(StudentContext)

    useEffect(() => {
        fetch(`/teachers/${id}`)
        .then(res => res.json())
        .then(teacherData => setTeacher(teacherData))
    }, []) 

    function handleDeleteReview(deletedReview){
        const updatedReviews = teacher.reviews.filter(review => review.id !== deletedReview.id)
        const teacherWithUpdatedReviews = {...teacher, reviews: updatedReviews}
        setTeacher(teacherWithUpdatedReviews)
    }

    if (currentUser) {
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
                    {teacher.id ? teacher.reviews.map(review => <Review review={review} inTeacherDetails={true} onDeleteReview={handleDeleteReview} key={review.id}/>)  : null}
        </div>
    );
    } else {
        return(
        <div>{null}</div>
        )
    }
}

export default TeacherDetails;