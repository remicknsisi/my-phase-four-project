import React, { useState } from "react";

function Login({ onLogin }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([])
  
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
                res.json().then((user) => onLogin(user))
            } else {
                res.json().then(
                    console.log('hi - error')
                    // set errors to display
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
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='login-input'
        />
        <br/>
        <button type="submit">Login</button>
      </form>
    </div>
    );
  }

export default Login;