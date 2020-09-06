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
import UserBlogList from '../components/UserBlogList';
import { useState } from 'react';
import MessageInfo from '../components/MessageInfo';
import ProfileContainer from './Profile';


const successfulMessage = "Congratulation you have successfully ";
const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    const [isSignin, setIsSignin] = useState(false);
    const [isSignup, setIsSignup] = useState(false);
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
                                    setSignInfo={setIsSignin}
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
                                setSignInfo={setIsSignup}
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
                    render={props => {
                        if (currentUser.isAuthenticated && Number(props.match.params.id) === currentUser.user.id) {
                            if (props.match.params.blog_id === "saved") {
                                return <UserBlogList
                                    currentUser={currentUser.user}
                                    history={props.history}
                                    info={"saved"}
                                />
                            }
                            else if (props.match.params.blog_id === "published")
                                return <UserBlogList
                                    currentUser={currentUser.user}
                                    history={props.history}
                                    info={"published"}
                                />
                            return <Blog blog_id={props.match.params.blog_id} />
                        }

                        else {
                            props.history.push('/');
                        }
                    }}>
                </Route>

                <Route path="/users/:id/profile"
                    render={props => {
                        return (<ProfileContainer user_id={currentUser.user.id} />)
                    }}>
                </Route>

            </Switch>
            {isSignin &&
                (<MessageInfo messageText={successfulMessage + "signed in"} isGreen={true}
                    postMessage={() => { setIsSignin(false) }} />)}
            {isSignup &&
                (<MessageInfo messageText={successfulMessage + "signed up"} isGreen={true}
                    postMessage={() => { setIsSignup(false) }} />)}
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