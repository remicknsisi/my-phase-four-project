import React, { useState } from "react";
import { useParams } from "react-router-dom";

function NewReviewForm ({ teachers, students, onSubmit }) {

    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState()
    const [newTeacher, setNewTeacher] = useState({})

    const { student_id } = useParams()

    const teacherOptions = teachers.map(teacher => <option value={teacher.id}>{teacher.name}</option>)

    function handleSubmitReview(e){
        e.preventDefault()

        const newReview = {
            teacher_id: newTeacher,
            student_id: student_id,
            rating: newRating,
            comment: newComment
        }

        fetch(`http://localhost:3000/students/${student_id}/reviews`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              newReview
            )
          })
          .then(res => res.json())
          .then(newReview => {
            const student = students.find(student => student.id === newReview.student_id)
            const studentUpdatedReviews = [...student.reviews, newReview]
            const updatedStudent = {...student, reviews: studentUpdatedReviews}
            onSubmit(updatedStudent, newReview.id)
        })
    }

    return (
        <div className="review-form">
            <label>Leave a Review: </label>
            <form onSubmit={handleSubmitReview}>
            Select Teacher: <select type="number" value={newTeacher} onChange={e => setNewTeacher(e.target.value)}>
                    {teacherOptions}
                </select>
                <br/>
            Leave a Comment: <input type="text" placeholder="E.g. This professor is the best!" value={newComment} onChange={e => setNewComment(e.target.value)}>
                </input>
                <br/>
            Choose a Rating: <input type="number" placeholder="Rate 1-5 Stars" value={newRating} onChange={e => setNewRating(e.target.value)}>
                </input>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default NewReviewForm;