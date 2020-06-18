import React from 'react'

const ResponseItem=(props)=>{
    let datediff=calculateTime(props.response.created_at);
    return (
        <li>
            <div className="user-info">
                <div className="user">
                    <img src={props.response.profileImageUrl} alt="user"/>
                    <div className="name">
                        <h3>{props.response.username}</h3>
                        <span>{datediff}</span>
                    </div>

                </div>
            </div>
            <div className="text">
                {props.response.text}
            </div>
            <div className="response-control">
                
            </div>
        </li>
    )
}

function calculateTime(createAt){
    let ms=(new Date())-(new Date(createAt));
    if(ms<60000) return "less than a minute ago";
    else if(ms<3600000) return `${Math.floor(ms/60000)} minutes ago`;
    else if(ms<(24*3600000)) return `${Math.floor(ms/3600000)} hours ago`;
    else if(ms<(30*24*3600000)) return `${Math.floor(ms/(24*3600000))} days ago`;
    else if(ms<(12*30*24*3600000)) return `${Math.floor(ms/(30*24*3600000))} months ago`;
    else return `${Math.floor(ms/(12*30*24*3600000))} years ago`;
}

export default ResponseItem;