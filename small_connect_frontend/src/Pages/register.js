import React from 'react';
import './login.css';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
        this.cpasswordRef = React.createRef();
        this.nameRef = React.createRef();
        this.emailRef = React.createRef();
        this.pincodeRef = React.createRef();
        this.state = {
            err: true
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
    }

    render() {
        return(
            <div className="main">
                <div className="logo-box">
                    <span className="login-logo">Small Connect</span>
                </div>
                {this.state.err?"":<span className="error">Username or Password are invalid!</span>}
                <div className="signin-box">
                    <span className="signin-title">Sign Up</span>
                    <form action="#" method="POST" onSubmit={(e) => this.handleSubmit(e)} >
                        <input type="text" className="inp" placeholder="Username" ref={this.usernameRef} />
                        <input type="text" className="inp" placeholder="Name" ref={this.nameRef} />
                        <input type="email" className="inp" placeholder="Email" ref={this.emailRef} />
                        <input type="number" maxLength={6} minLength={6} className="inp" placeholder="Pincode" ref={this.pincodeRef} />
                        <input type="password" className="inp" placeholder="Password" ref={this.passwordRef} />
                        <input type="password" className="inp" placeholder="Confirm Password" ref={this.cpasswordRef} />
                        <a className="forgot" href="/login">Already user? Signin here</a>
                        <button className="login-btn" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;
