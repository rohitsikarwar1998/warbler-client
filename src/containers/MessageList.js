import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchMessages,removeMessage} from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
    componentDidMount(){
        this.props.fetchMessages();
    }
    render(){
        const {messages,removeMessage,currentUserId} =this.props;
        let messageList =messages.map(m=>(
            <MessageItem
            key={m._id}
            data={m.createdAt}
            isCorrectUser={currentUserId===m.user._id}
            removeMessage={removeMessage.bind(this,m.user._id,m._id)}
            text={m.text}
            username={m.user.username} 
            profileImageUrl={m.user.profileImageUrl} />
        ));
        return (
            <div className="row col-sm-8">
                <div className="offset-1 col-sm-8">
                    <ul className="list-group" id="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state){
    return {
        messages:state.messages,
        currentUserId:state.currentUser.user.id
    };
};

export default connect(mapStateToProps,{fetchMessages,removeMessage})(MessageList);