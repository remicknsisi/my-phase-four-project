import React from "react";

function Home ({ user }) {
    return (
        <div className="home">
            {user.id ? <h1>Welcome to Hogwarts, {user.name}</h1> : <p>Please sign in</p>}
            {/* <p>put hogwarts acceptance letter text here!</p> */}
        </div>
    )
}

export default Home;