import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class AuthForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            profileImageUrl: ''
        }
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const authType = this.props.signUp ? "signup" : "signin";
        this.props.authUser(authType, this.state)
            .then(() => {
                this.props.history.push('/');
            })
            .catch(() => {
                return;
            });
    }

    render() {
        const { username, email, profileImageUrl } = this.state;
        const { buttonText, heading, signUp, signIn, errors, history, removeError } = this.props;
        history.listen(() => {
            removeError();
        });
        return (
            <div className="form-sub-container">
                <h2>{heading}</h2>
                {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <div className="fa fa-envelope"></div>
                        <input
                            className="form-input"
                            id="email"
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                            placeholder="Email address"
                            type="text" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <div class="fa fa-lock"></div>
                        <input
                            className="form-input"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            placeholder="password"
                            type="password" />
                    </div>
                    {signUp && (
                        <div>
                            <div className="form-group">

                                <label htmlFor="username">Username</label>
                                <div class="fa fa-user"></div>
                                <input
                                    className="form-input"
                                    id="username"
                                    value={username}
                                    name="username"
                                    placeholder="username"
                                    onChange={this.handleChange}
                                    type="text" />
                            </div>
                            <div className="form-group">

                                <label htmlFor="profileImageUrl">Image url</label>
                                <div class="fa fa-camera"></div>
                                <input
                                    className="form-input"
                                    id="profileImageUrl"
                                    name="profileImageUrl"
                                    value={profileImageUrl}
                                    placeholder="Image url"
                                    onChange={this.handleChange}
                                    type="text" />
                            </div>
                        </div>
                    )}
                    <button type="submit" className="btn-submit">{buttonText}</button>
                </form>

                {signUp && (
                    <div className="bottom">
                        <p>Already have an account? <Link to='/signin'>Log In</Link></p>
                    </div>
                )}
                {signIn && (
                    <div className="bottom">
                        <p>New to Warbler? <Link to='/signup'>Sign Up</Link></p>
                    </div>
                )}

            </div>
        );
    }
}

export default AuthForm;
