import React from 'react';

const ShortBio = ({ shortBio, setShortBio }) => {

    let handleChange = (e) => {
        setShortBio(e.target.value);
    }
    return (
        <div className="i-f">
            <label htmlFor="shortBio">ShortBio</label>
            <textarea
                className="i-c"
                type="text"
                id={"shortBio"}
                value={shortBio}
                onChange={handleChange}
                autoComplete="off" />
        </div>
    );
}

export default ShortBio;