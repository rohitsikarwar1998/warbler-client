import React from 'react';
import Moment from 'react-moment';
import UserHover from '../components/UserHover';
import ReactHover from 'react-hover';

const optionsCursorTrueWithMargin = {
    followCursor: true,
    shiftX: -40,
    shiftY: 30
}

const BlogItem = (props) => {
    let { text, data, id, username, profileImageUrl, history, blog_id } = props;
    let title = extractSubstring(text, "<h1>", "</h1>");
    let description = extractSubstring(text, "<p>", "</p>");
    let image = extractSubstring(text, 'src="', '"/>');
    return (
        <li onClick={() => {
            history.push(`/users/${id}/blogs/${blog_id}`);
        }} className="list-item">

            <div className="blog-area">
                <h3 >{title}</h3>
                <p>{description.slice(0, 100)}</p>
                <div className="user-info">

                    <ReactHover options={optionsCursorTrueWithMargin}>
                        <ReactHover.Trigger type='trigger'>
                            <span>{username}</span>
                        </ReactHover.Trigger>
                        <ReactHover.Hover type='hover'>
                            <UserHover
                                username={username}
                                profileImageUrl={profileImageUrl}
                            />
                        </ReactHover.Hover>
                    </ReactHover>

                    <span className="date-text">
                        <Moment className="date" format="Do MMM YYYY">
                            {data}
                        </Moment>
                        {" - " + calculateReadTime(text)}
                    </span>
                </div>

            </div>
            <div className="image-area">
                <img
                    src={image}
                    alt={username}
                    height="120"
                    width="120" />
            </div>
        </li>
    );
}

function extractSubstring(text, start, end) {
    let startIndex = text.indexOf(start);
    let endIndex = text.indexOf(end);
    let s = "";
    for (let i = startIndex + start.length; i < endIndex; i++) {
        s += (text.charAt(i));
    }
    return s;
}
function calculateReadTime(text) {
    return `${Math.ceil(text.length / 1000)} min read`;
}

export default BlogItem;