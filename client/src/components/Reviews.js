import React from "react";
import Review from "./Review.js"

function Reviews ({ user, onDeleteReview }) {

    const reviews = user.reviews

    return (
        <div className="reviews">
            <h2>My Reviews</h2>
            {user.id ? reviews.map(review => <Review onDeleteReview={onDeleteReview} review={review} key={review.id}/>) : <p>Unauthorized - please log in</p>}
        </div>
    )
}

export default Reviews;