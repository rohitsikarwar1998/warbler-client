import React from 'react';
import Input from './Input';

const Name = ({ name, setName }) => {

    let handleChange = (e) => {
        setName(e.target.value);
    }
    return (
        <div className="i-f">
            <label htmlFor="name">Name</label>
            <Input id={"name"} value={name} onChange={handleChange} />
        </div>
    );
}

export default Name;
