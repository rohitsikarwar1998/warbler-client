import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import logo from '../images/warbler-logo.png';
import { logout } from '../store/actions/auth';
import HeaderUserControl from '../components/HeaderUserControl';
import MessageInfo from '../components/MessageInfo';


const successfulMessage = "Congratulation you have successfully ";
class Navbar extends Component {

    constructor(){
        super();
        this.state={
            isLogout:false,
        }
        this.postMessage=this.postMessage.bind(this);
    }

    // after showing the message below function will run
    postMessage(){
        this.setState({isLogout:false});
    }

    logout = e => {
        e.preventDefault();
        this.setState({isLogout:true});
        this.props.history.push('/');
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
                        <HeaderUserControl
                            {...this.props.currentUser.user}
                            logout={this.logout}
                        />

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
                {this.state.isLogout && 
                  (<MessageInfo messageText={successfulMessage+"logout"} isGreen={true} 
                               postMessage={this.postMessage}/>)}
            </nav>
        );
    }
}

function mapStateToProps(state) {
    return {
        currentUser: state.currentUser
    };
}

export default withRouter(connect(mapStateToProps, { logout })(Navbar));

