import React, { useContext } from "react";
import Review from "./Review.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayReviews () {
    const { currentUser } = useContext(StudentContext)

    return (
        <div className="cards-header">
            <h2>My Reviews</h2>
            {currentUser ? currentUser.reviews.map(review => <Review review={review} key={review.id}/>) : null}
        </div>
    )
}

export default DisplayReviews;