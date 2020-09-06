import React from 'react';
import Name from './Name';
import Email from './Email';
import Username from './Username';
import ImageUrl from './ImageUrl';
import ShortBio from './ShortBio';

const profile = (props) => {
    return (
        //p-l profile left section
        //p-r profile right section
        <form className="profile" onSubmit={props.handleSubmit}>
            <div>
                <div className="p-l">
                    <Name name={props.name} setName={props.setName} />
                    <Username username={props.username} setUsername={props.setUsername} />
                    <Email email={props.email} setEmail={props.setEmail} />
                </div>
                <div className="p-r">
                    <ImageUrl imageUrl={props.imageUrl} setImageUrl={props.setImageUrl} />
                    <ShortBio shortBio={props.shortBio} setShortBio={props.setShortBio} />
                </div>
            </div>
            <div className="btns">
                <button type="submit" >Save</button>
                <button type="button" onClick={props.handleCancel}>Cancel</button>
            </div>
        </form>
    );
}

export default profile;
