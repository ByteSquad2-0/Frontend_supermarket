import React from 'react';
import './login.css';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.state = {
            err: false
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="main">
                <div className="logo-box">
                   <a href = "/" className = "link"> <span className="login-logo">Small Connect</span> </a>
                </div>
                {this.state.err?<span className="error">Username or Password are invalid!</span>:""}
                <div className="signin-box">
                    <span className="signin-title">Login</span>
                    <form action="#" method="POST" onSubmit={(e) => this.handleSubmit(e)} >
                        <input type="text" className="inp" placeholder="Username" ref={this.usernameRef} />
                        <input type="password" className="inp" placeholder="Password" ref={this.passwordRef} />
                        <a className="forgot" href="/">Forgot password?</a>
                        <button className="login-btn" type="submit">Login</button>
                    </form>
                </div>
                <a style={{marginTop: "10px"}} className="forgot" href="/register">Not User? signup here</a>
            </div>
        );
    }
}

export default Login;
