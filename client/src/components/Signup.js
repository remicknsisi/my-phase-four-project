import React, { useState, useContext } from 'react';
import { Navigate } from 'react-router';
import { StudentContext } from "../context/StudentProvider.js";
// import { useHistory } from "react-router";

function Signup (){
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(StudentContext)

    function handleSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({

            })
        })
        .then(res => res.json())
        .then(newStudent => {
            if (!newStudent.errors){
                signup(newStudent)
                Navigate('/')
            } else {
                setUsername('')
                setPassword('')
                setPasswordConfirmation('')
                const errorLis = newStudent.errors.map(error => <li>{error}</li>)
                setErrorsList(errorLis)
                // set all things blank
            }
        })
    }

    return (
        <div className='login-container'>
            <h1 className="signup-header">Sign Up Below</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Name: </label>
                <input
                type="text">

                </input>
                <label>House: </label>
                <input
                type="text">

                </input>
                <label>Year: </label>
                <input
                type="number">

                </input>
                <label>Image: </label>
                <input
                type="text">

                </input>
                <br/>
                <br/>
                <label>Username: </label>
                <input
                type="text">

                </input>
                <label>Password: </label>
                <input
                type="password">

                </input>
                <label>Confirm Password: </label>
                <input
                type="password">
                    
                </input>
                <br/>
                <button type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default Signup;

// timestamp 45:30 for nancys form