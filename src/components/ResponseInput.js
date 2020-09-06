import React, { Component } from 'react';


class ResponseInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({ text: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        if (this.state.text !== '') this.props.handleSubmit(this.state.text);
        this.setState({ text: '' });
    }

    render() {
        const { profileImageUrl } = this.props.currentUser;
        return (
            <div className="response-input">
                <form onSubmit={this.handleSubmit}>
                    <img src={profileImageUrl} alt="user" />
                    <textarea
                        value={this.state.text}
                        placeholder="write your response..."
                        onChange={this.handleChange}
                        autoComplete="off"
                        name="text"
                        type="text" />
                    <button className="btn" type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default ResponseInput;