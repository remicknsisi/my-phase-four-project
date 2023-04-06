import React, { useContext } from "react";
import Review from "./Review.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayReviews ({ onDeleteReview, teachers }) {
    const { currentUser } = useContext(StudentContext)

    return (
        <div className="cards-header">
            <h2>My Reviews</h2>
            {currentUser ? currentUser.reviews.map(review => <Review teachers={teachers} onDeleteReview={onDeleteReview} review={review} key={review.id}/>) : null}
        </div>
    )
}

export default DisplayReviews;