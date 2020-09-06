import React from 'react';

const Input = ({ id, value, onChange }) => {
    return (
        <input
            className="i-c"
            id={id}
            type="text"
            value={value}
            onChange={onChange}
            autoComplete="off"
        />
    );
}

export default Input;
