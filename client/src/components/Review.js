import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Review ({ review, students }) {
    const { teacher_id, comment, rating, id, student_id } = review
    const { currentUser, handleDeleteReview } = useContext(StudentContext)

    const reviewAuthor = students.map(student => student.id == student_id ? student.name : null)
    const reviewedTeacher = currentUser.teachers.find(teacher => teacher.id == teacher_id)

    function onDelete(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedReview => handleDeleteReview(deletedReview))}
    
    if (currentUser){
        return (
            <div className="associated-card">
                <h3>Professor: {reviewedTeacher.name} | Rating: {'✨'.repeat(rating)}</h3>
                <p>{comment}</p>
                <p>Posted by {reviewAuthor}</p>
                <button onClick={() => onDelete()}>Delete Review</button>
            </div>
        )
    } else {
        <h1>Please Log In or Sign Up.</h1>
    }
}

export default Review;