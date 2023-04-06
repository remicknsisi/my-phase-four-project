import React, { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function NewReviewForm ({ teachers, students }) {
    const [newComment, setNewComment] = useState('')
    const [newRating, setNewRating] = useState()
    const [newTeacher, setNewTeacher] = useState({})
    const [errorsList, setErrorsList] = useState([])
    // set default values for these to avoid breaking - or validations in back end!!
    const { handleSubmitReview } = useContext(StudentContext)
    const { student_id } = useParams()
    const navigate = useNavigate()


    const teacherOptions = teachers.map(teacher => <option value={teacher.id}>{teacher.name}</option>)

    function onSubmitReview(e){
        e.preventDefault()

        const newReview = {
            teacher_id: newTeacher,
            student_id: student_id,
            rating: newRating,
            comment: newComment
        }

        fetch(`/students/${student_id}/reviews`, {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              newReview
            )
          })
          .then(res => {
            if(res.ok){
                res.json().then((newReview) => {
                    handleSubmitReview(newReview)
                    setNewComment('')
                    setNewRating()
                    setNewTeacher({})
                    navigate('/')})
            } else {
                res.json().then((message) => {
                    const errorLis = message.errors.map(error => <li key={error}>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })
    }

    return (
        <div className="review-container">
            <label>Rate My Professor: </label>
            <form className="review-form" onSubmit={onSubmitReview}>
            Select Teacher: <select className="review-input" type="number" value={newTeacher} onChange={e => setNewTeacher(e.target.value)}>
                    {teacherOptions}
                </select>
                <br/>
            Leave a Comment: <input className="review-input" type="text" placeholder="E.g. This professor is the best!" value={newComment} onChange={e => setNewComment(e.target.value)}>
                </input>
                <br/>
            Choose a Rating: <input className="review-input" type="number" placeholder="Rate 1-5 Stars" value={newRating} onChange={e => setNewRating(e.target.value)}>
                </input>
                <br/>
                <button>Submit</button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default NewReviewForm;