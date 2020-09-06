import React from 'react';
import Input from './Input';

const Username = ({ username, setUsername }) => {

    let handleChange = (e) => {
        setUsername(e.target.value);
    }
    return (
        <div className="i-f">
            <label htmlFor="username">Username</label>
            <Input id={"username"} value={username} onChange={handleChange} />
        </div>
    );
}

export default Username;