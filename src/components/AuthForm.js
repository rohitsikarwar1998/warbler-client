import React, { Component } from 'react'

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
        const { buttonText, heading, signUp, errors, history, removeError } = this.props;
        history.listen(() => {
            removeError();
        });
        return (
            <div className="row justify-content-md-center text-center">
                <div className="col-md-6">
                    <form onSubmit={this.handleSubmit}>
                        <h2>{heading}</h2>
                        {errors.message && (<div className="alert alert-danger">{errors.message}</div>)}
                        <label htmlFor="email">Email:</label>
                        <input
                            className="form-control"
                            id="email"
                            value={email}
                            name="email"
                            onChange={this.handleChange}
                            type="text" />
                        <label htmlFor="password">Password:</label>
                        <input
                            className="form-control"
                            id="password"
                            name="password"
                            onChange={this.handleChange}
                            type="password" />
                        {signUp && (
                            <div>
                                <label htmlFor="username">Username:</label>
                                <input
                                    className="form-control"
                                    id="username"
                                    value={username}
                                    name="username"
                                    onChange={this.handleChange}
                                    type="text" />
                                <label htmlFor="profileImageUrl">Image url:</label>
                                <input
                                    className="form-control"
                                    id="profileImageUrl"
                                    name="profileImageUrl"
                                    value={profileImageUrl}
                                    onChange={this.handleChange}
                                    type="text" />
                            </div>
                        )}
                        <button type="submit" className="btn btn-primary btn-sm">{buttonText}</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AuthForm;
