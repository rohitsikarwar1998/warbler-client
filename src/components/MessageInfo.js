import React, { useState,useEffect } from 'react';

const MessageInfo = (props) => {

    const [renderChild,setRenderChild]=useState(true);

    // timeout function it will set renderChild to false
    
    useEffect(() => {
        var timeoutId=setTimeout(()=>{
            setRenderChild(false);
            props.postMessage();
        },3000);
        return ()=>{
            clearTimeout(timeoutId);
        }
    },[renderChild]);

    // child is true for 2 sec then render MessageInfoHelper
    if(renderChild){
        return (
            <MessageInfoHelper {...props}/>
        )
    }
    
    // after 2second render nothing 
    return null;
    
}

const MessageInfoHelper = ({messageText,isGreen}) => {

    // inline styling for message text
    let style={
        color:isGreen?"#009133" :"#C3272B",
        textAlign:"center",
    }

    return (
        <div className="message-info-container">
            <p style={style}>{messageText}</p>
        </div>
    );
}

export default MessageInfo;
