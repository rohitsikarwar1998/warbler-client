import React from 'react';
import Input from './Input';

const ImageUrl = ({ imageUrl, setImageUrl }) => {
    let handleChange = (e) => {
        setImageUrl(e.target.value);
    }
    return (
        <div className="i-f">
            <label htmlFor="imageurl">Image url</label>
            <Input id={"imageurl"} value={imageUrl} onChange={handleChange} />
        </div>
    );
}

export default ImageUrl;
