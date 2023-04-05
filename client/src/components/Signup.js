import React, { useState, useContext } from 'react';
import { useNavigate } from "react-router-dom";
import { StudentContext } from "../context/StudentProvider.js";

function Signup (){
    const [name, setName] = useState('')
    const [house, setHouse] = useState('Choose a House')
    const [year, setYear] = useState('Choose a Year')
    const [image, setImage] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errorsList, setErrorsList] = useState([])
    const { signup } = useContext(StudentContext)

    const navigate = useNavigate()

    function handleSubmit(e){
        e.preventDefault()

        fetch('http://localhost:3000/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({
                password,
                username, 
                passwordConfirmation,
                image,
                year,
                house,
                name
            })
        })
        .then(res => {
            console.log(res)
            if(res.ok){
                res.json().then((newStudent) => {
                    console.log(newStudent)
                    // need to get that valid response!
                })
            } else {
                res.json().then((newStudent) => {
                    setUsername('')
                    setPassword('')
                    setPasswordConfirmation('')
                    setName('')
                    setHouse('Choose a House')
                    setYear('Choose a Year')
                    setImage('')
                    const errorLis = newStudent.errors.map(error => <li>{error}</li>)
                    setErrorsList(errorLis)
                })
            }
        })

        //
        // .then(newStudent => { console.log(newStudent.errors)
        //     if (!newStudent.errors){
        //         signup(newStudent)
        //         navigate('/')
        //     }
        // })
    }

    return (
        <div className='login-container'>
            <h1 className="signup-header">Sign Up Below</h1>
            <form onSubmit={handleSubmit} className="login-form">
                <label>Name: </label>
                <input
                type="text"
                placeholder="E.g. Harry Potter"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='login-input'/>
                <label>House: </label>
                <select className='login-input' onChange={e => setHouse(e.target.value)}>
                    <option>Choose a House</option>
                    <option value="Gryffindor">Gryffindor</option>
                    <option value="Slytherin">Slytherin</option>
                    <option value="Ravenclaw">Ravenclaw</option>
                    <option value="Hufflepuff">Hufflepuff</option>
                </select>
                <br/>
                <label>Year: </label>
                <select className='login-input' onChange={e => setYear(e.target.value)}>
                    <option>Choose a Year</option>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                    <option value={5}>5</option>
                    <option value={6}>6</option>
                    <option value={7}>7</option>
                </select>
                <br/>
                <label>Image: </label>
                <input
                type="text"
                placeholder="Image URL here"
                value={image}
                onChange={(e) => setImage(e.target.value)}
                className='login-input'/>
                <br/>
                <br/>
                <label>Username: </label>
                <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className='login-input'/>
                <br/>
                <label>Password: </label>
                <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='login-input'/>
                <br/>
                <label>Confirm Password: </label>
                <input
                type="password"
                value={passwordConfirmation}
                onChange={(e) => setPasswordConfirmation(e.target.value)}
                className='login-input'/>
                <br/>
                <button type="submit">Sign Up</button>
                <p className="error-message">{errorsList}</p>
            </form>
        </div>
    )
}

export default Signup;

// timestamp 45:30 for nancys form