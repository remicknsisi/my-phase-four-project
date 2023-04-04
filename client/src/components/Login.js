import React, { useState, useContext } from "react";
import { StudentContext } from "../context/StudentProvider.js";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("")

    const { login } = useContext(StudentContext)
  
    function handleSubmit(e) {
      e.preventDefault()
      const user = {
        username,
        password
      }

      fetch("/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then(res => {
            if(res.ok){
                res.json().then((user) => login(user))
            } else {
                res.json().then(
                    console.log('hi - error')
                    // set error to display
                )
            }
        })
    }
  
    return (
    <div className='login-container'>
      <form onSubmit={handleSubmit} className="login-form">
        Username: 
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='login-input'
        />
        <br/>
        Password: 
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-input'
        />
        <br/>
        <button type="submit">Login</button>
        <p>Don't have an account? Sign up</p>
      </form>
    </div>
    );
  }

export default Login;