import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/warbler-logo.png';
import {logout} from '../store/actions/auth'


class Navbar extends Component {
    logout=e=>{
        e.preventDefault();
        this.props.logout();
    }
    render() {
        return (
            <nav className="navbar">
                    <div className="navbar-header">
                        <Link to="/" className="navbar-brand">
                            <img src={logo} alt="warbler Home" />
                            <span>warbler Home</span>
                        </Link>
                    </div>
                    {this.props.currentUser.isAuthenticated ?
                        (<ul >
                            <li>
                                <Link to={`/users/${this.props.currentUser.user.id}/messages/new`}>New Message</Link>
                            </li>
                            <li>
                                <Link to='/' onClick={this.logout}>Log out</Link>
                            </li>
                        </ul>) :
                        (<ul >
                            <li>
                                <Link to="/signup">Sign Up</Link>
                            </li>
                            <li>
                                <Link to="/signin">Log in</Link>
                            </li>
                        </ul>)
                    }
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default connect(mapStateToProps, {logout})(Navbar);

