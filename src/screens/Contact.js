import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { userAction } from '../redux/actions';

class Contact extends Component {
  render() {
    console.log('render contact');
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
        <h2>Contact</h2>
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

const matStateToProps = state => ({
  user: state.user
});

export default connect(
  matStateToProps,
  { userAction }
)(Contact);