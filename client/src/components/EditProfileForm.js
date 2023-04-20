import React, { useContext, useState } from "react";
import { StudentContext } from "../context/StudentProvider.js";
import { useNavigate } from "react-router-dom";

function EditProfileForm () {
    // add error handling to this form 
    const { currentUser, handleEditStudent } = useContext(StudentContext)
    const [student, setStudent] = useState(currentUser)
    const [errorsList, setErrorsList] = useState([])

    const { year, name, house, image, id } = student

    const [newName, setNewName] = useState(name)
    const [newYear, setNewYear] = useState(year)
    const [newImage, setNewImage] = useState(image)
    const [newHouse, setNewHouse] = useState(house)
    const navigate = useNavigate()

    function handleEditProfile(e){
        e.preventDefault()

        fetch(`/students/${id}`, {
            method: 'PATCH',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                name: newName,
                year: newYear,
                image: newImage,
                house: newHouse,
             })
           })
           .then(res => {
            if(res.ok){
                res.json().then((updatedStudent) => {
                    handleEditStudent(updatedStudent)
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
            <h2>Edit Profile: </h2>
            <form onSubmit={handleEditProfile} className="review-form">
                <label>Edit Full Name: </label>
                <input className="review-input" type="text" onChange={(e) => setNewName(e.target.value)} value={newName} placeholder="Full Name" />
                <br></br>
                <label>Edit Image URL: </label>
                <input className="review-input" type="text" onChange={(e) => setNewImage(e.target.value)} value={newImage} placeholder="Image URL" />
                <br></br>
                <label>Edit House: </label>
                <select className="review-input" onChange={e => setNewHouse(e.target.value)}>
                    <option>Choose a House</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                </select>
                <br/>
                <label>Edit Year: </label>
                <select className="review-input" type="number" onChange={e => setNewYear(e.target.value)}>
                    <option>Choose a Year</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <br></br>
                <br></br>
                <button type="submit">Finish Editing Profile ✏️ </button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default EditProfileForm;