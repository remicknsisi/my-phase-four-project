import React, { useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Review ({ review }) {
    const { comment, rating, id, author, subject } = review
    const { currentUser, handleDeleteReview } = useContext(StudentContext)

    function onDelete(){
        fetch(`/reviews/${id}`, {
            method: 'DELETE'})
          .then(res => res.json())
          .then(res => {
            if (res.ok){
                res.json().then(deletedReview => handleDeleteReview(deletedReview))
            } else {
                res.json().then(message => {
                    const errorLis = message.errors
                    console.log(errorLis)
                    // setErrorsList(errorLis)
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
            </div>
        )
    } else {
        <h1>Please Log In or Sign Up.</h1>
    }
}

export default Review;