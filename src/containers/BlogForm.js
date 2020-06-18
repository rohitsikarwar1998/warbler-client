import React, { Component } from 'react';
import { postNewBlog } from '../store/actions/blogs';
// import { addError } from '../store/actions/errors';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';


class BlogForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            blog: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.postNewBlog(this.state.blog);
        this.setState({ blog: '' });
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
                        placeholder="Write something in html format..."
                        value={this.state.blog}
                        onChange={e => this.setState({ blog: e.target.value })} />
                    <button type='submit'>
                        Publish
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

export default connect(mapStateToProps, { postNewBlog })(BlogForm);

