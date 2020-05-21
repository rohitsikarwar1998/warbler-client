import React, { Component } from 'react';
import { postNewMessage } from '../store/actions/messages';
// import { addError } from '../store/actions/errors';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';


class MessageForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postNewMessage(this.state.message);
        this.setState({ message: '' });
        this.props.history.push('/');
    };

    render() {
        return (
            <div className="message-form-container">

                <form className="message-form" onSubmit={this.handleSubmit}>
                    <Helmet>
                        <style>{'body { background-color: #ac3b61; }'}</style>
                    </Helmet>
                    {this.props.errors.message && (
                        <div className="alert alert-danger">{this.props.errors.message}</div>
                    )}
                    <textarea
                        type='text'
                        className='form-input'
                        placeholder="Write something..."
                        value={this.state.message}
                        onChange={e => this.setState({ message: e.target.value })} />
                    <button type='submit'>
                        Add my message!
                    </button>
                </form>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        errors: state.errors
    };
}

export default connect(mapStateToProps, { postNewMessage })(MessageForm);

