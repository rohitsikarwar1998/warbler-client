import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import Homepage from '../components/Homepage';
import AuthFrom from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';
import withAuth from '../hocs/withAuth';
import MessageForm from '../containers/MessageForm';

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props;
    return (
        <div className="container">
            <Switch>
                <Route exact path="/"
                    render={props => {
                        //this props contain information relater to our routes 
                        //objects like ---history--match--location--
                        return <Homepage currentUser={currentUser} {...props} />
                    }}>
                </Route>
                <Route exact path="/signin"
                    render={props =>
                        <AuthFrom
                            removeError={removeError}
                            errors={errors}
                            authUser={authUser}
                            buttonText="Log in"
                            heading="Welcome Back!"
                            {...props} />
                    }>
                </Route>
                <Route exact path="/signup"
                    render={props =>
                        <AuthFrom
                            removeError={removeError}
                            errors={errors}
                            signUp
                            authUser={authUser}
                            buttonText="Sign up"
                            heading="Join Warbler Today"
                            {...props} />
                    }>
                </Route>
                <Route path="/users/:id/messages/new"
                    component={
                        withAuth(MessageForm)
                    }>
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