import React, { useContext } from "react";
import Review from "./Review.js";
import { StudentContext } from "../context/StudentProvider.js";

function DisplayReviews ({ students }) {
    const { currentUser } = useContext(StudentContext)

    return (
        <div className="cards-header">
            <h2>My Reviews</h2>
            {currentUser ? currentUser.reviews.map(review => <Review review={review} students={students} key={review.id}/>) : null}
        </div>
    )
}

export default DisplayReviews;