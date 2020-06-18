import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthFrom from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import BlogForm from '../containers/BlogForm';
import Blog from './Blog';
import { Helmet } from 'react-helmet';


const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"
                    render={props => {
                        //this props contain information relater to our routes 
                        //objects like ---history--match--location--
                        return (
                            <Homepage currentUser={currentUser} {...props} />
                        )
                    }}>
                </Route>
                <Route exact path="/signin"
                    render={props =>
                        (
                            <div className="form-container">
                                <Helmet>
                                    <style>{'body { background-color: #ac3b61; }'}</style>
                                </Helmet>
                                <AuthFrom
                                    signIn
                                    removeError={removeError}
                                    errors={errors}
                                    authUser={authUser}
                                    buttonText="Log in"
                                    heading="Welcome Back!"
                                    {...props} />
                            </div>
                        )
                    }>
                </Route>
                <Route exact path="/signup"
                    render={props => (
                        <div className="form-container">
                            <Helmet>
                                <style>{'body { background-color: #ac3b61; }'}</style>
                            </Helmet>
                            <AuthFrom
                                removeError={removeError}
                                errors={errors}
                                signUp
                                authUser={authUser}
                                buttonText="Sign up"
                                heading="Join Warbler Today"
                                {...props} />
                        </div>
                    )
                    }>
                </Route>
                <Route path="/users/:id/blogs/new"
                    component={
                        withAuth(BlogForm)
                    }>
                </Route>
                <Route path="/users/:id/blogs/:blog_id"
                    render={props => (
                        <Blog blog_id={props.match.params.blog_id} />
                    )}>
                </Route>
            </Switch>
        </div>
    );
};

function mapStateToPorps(state) {
    return {
        currentUser: state.currentUser,
        errors: state.errors
    };
}

export default withRouter(connect(mapStateToPorps, { authUser, removeError })(Main));