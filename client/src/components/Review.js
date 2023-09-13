import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Review ({ review, onDeleteReview, inTeacherDetails }) {
    const [error, setError] = useState('')
    const { comment, rating, id, author, subject } = review
    const { currentUser, handleDeleteReview } = useContext(StudentContext)

    function onDelete(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}})
          .then(res => {
            if (res.ok){
                res.json()
                .then(deletedReview => {
                    handleDeleteReview(deletedReview)
                    if (inTeacherDetails){
                    onDeleteReview(deletedReview)}})
            } else {
                res.json()
                .then(message => {
                    const errorMessage = message.error
                    setError(errorMessage)
                })
        }})
    }
    
    if (currentUser){
        return (
            <div className="associated-card">
                <h3>Professor: {subject.name} | Rating: {'✨'.repeat(rating)}</h3>
                <p>{comment}</p>
                <p>Posted by {author.name}</p>
                <button onClick={() => onDelete()}>Delete Review</button>
                <p className="error-message">{error}</p>
            </div>
        )
    } else {
        <h1>Please Log In or Sign Up.</h1>
    }
}

export default Review;