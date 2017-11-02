import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <div>
        <h2>Login</h2> <br />
        <button onClick={() => {
          window.localStorage.setItem('token', '1234567');
          this.props.history.push('/');
        }}>Login</button>
      </div>
    );
  }
}

export default Login;