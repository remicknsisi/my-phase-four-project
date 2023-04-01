import React from "react";

function Review ({ review, onDeleteReview }) {
    const { teacher_id, student_id, comment, rating, id } = review

    function handleDeleteReview(){
        fetch(`http://localhost:3000/reviews/${id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(deletedReview => onDeleteReview(deletedReview))}

    return (
        <div className="reviews">
            <h3>Rating: {rating}</h3>
            <p>{comment}</p>
            <button onClick={handleDeleteReview}>Delete Review</button>
        </div>
    )
}

export default Review;