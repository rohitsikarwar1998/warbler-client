import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMessages, removeMessage } from '../store/actions/messages';
import MessageItem from '../components/MessageItem';

class MessageList extends Component {
    componentDidMount() {
        this.props.fetchMessages();
    }
    render() {
        const { messages, removeMessage, currentUserId } = this.props;
        let messageList = messages.map(m => (
            <MessageItem
                key={m.id}
                data={m.updated_at}
                isCorrectUser={currentUserId === m.user_id}
                removeMessage={removeMessage.bind(this, m.user_id, m.id)}
                text={m.text}
                username={m.username}
                profileImageUrl={m.profileImageUrl} />
        ));
        debugger
        return (
            <div className="message-list-container">
                <div className="inside-message-list-container">
                    <ul className="list-items" id="messages">
                        {messageList}
                    </ul>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        messages: state.messages,
        currentUserId: state.currentUser.user.id
    };
};

export default connect(mapStateToProps, { fetchMessages, removeMessage })(MessageList);