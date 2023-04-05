import React, { useContext } from "react";
import Review from "./Review.js";
import { StudentContext } from "../context/StudentProvider.js";


function Reviews ({ onDeleteReview, teachers }) {
    const { currentUser } = useContext(StudentContext)

    const reviews = currentUser.reviews

    return (
        <div className="reviews-header">
            <h2>My Reviews</h2>
            {reviews.map(review => <Review teachers={teachers} onDeleteReview={onDeleteReview} review={review} key={review.id}/>)}
        </div>
    )
}

export default Reviews;