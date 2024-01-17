import React, { useState } from 'react';

const Try = () => {
    const [user_email, setEmail] = useState('');
    const [user_password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch('http://localhost:3000/addUser', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user_email, password: user_password }),
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch((error) => console.log("Error:", error));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email:
                 <input type="email" value={user_email} onChange={e => setEmail(e.target.value)} />
            </label>
            <label>
                Password:
                 <input type="password" value={user_password} onChange={e => setPassword(e.target.value)} />
            </label>
            <input type="submit" value="Submit" />
        </form>
    );
};

export default Try;