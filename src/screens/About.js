import React, { Component } from 'react';
import { Link } from "react-router-dom";

class About extends Component {
  render() {
    console.log('render about');
    return (
      <div>
        <nav style={styles.nav}>
          <Link style={styles.link} to='/'>Home</Link>
          <Link style={styles.link} to='/about'>About</Link>
          <Link style={styles.link} to='/contact'>Contact</Link>
          <button onClick={() => {
            window.localStorage.removeItem('token');
            this.props.history.push('/login');
          }}>Logout</button>
        </nav>
        <h2>About</h2>
      </div>
    );
  }
}

const styles = {
  nav: {

  },
  link: {

  }
};

export default About;