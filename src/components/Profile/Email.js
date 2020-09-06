import React from 'react';
import Input from './Input';

const Email = ({ email, setEmail }) => {

    let handleChange = (e) => {
        setEmail(e.target.value);
    }
    return (
        <div className="i-f">
            <label htmlFor="email">Email</label>
            <Input id={"email"} value={email} onChange={handleChange} />
        </div>
    );
}

export default Email;
