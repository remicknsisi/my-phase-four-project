import React from "react";

function Review ({ review, onDeleteReview, teachers, students }) {
    const { teacher_id, comment, rating, id } = review

    const ratedTeacher = teachers.find(teacher => teacher.id == teacher_id)

    function handleDeleteReview(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedReview => onDeleteReview(deletedReview))}
    
    return (
        <div className="associated-card">
            {students.map(student => {
                return (
                    <>
                    <h3>Professor: {ratedTeacher.name} | Rating: {'✨'.repeat(rating)}</h3>
                    <p>{comment}</p>
                    <p>Posted by {student.name}</p>
                    <button onClick={handleDeleteReview}>Delete Review</button>
                    </>
                )
            })}
        </div>
    )
}

export default Review;