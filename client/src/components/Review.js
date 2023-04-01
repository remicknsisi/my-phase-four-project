import React from "react";

function Review ({ review, onDeleteReview, teachers }) {
    const { teacher_id, student_id, comment, rating, id } = review

    const ratedTeacher = teachers.find(teacher => teacher.id == teacher_id)

    function handleDeleteReview(){
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedReview => onDeleteReview(deletedReview))}

    return (
        <div className="reviews">
            <h3>Professor: {ratedTeacher.name} | Rating: {'✨'.repeat(rating)}</h3>
            <p>{comment}</p>
            <button onClick={handleDeleteReview}>Delete Review</button>
        </div>
    )
}

export default Review;