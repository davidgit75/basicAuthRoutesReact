import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import { userAction } from '../redux/actions';

class Home extends Component {
  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout(
      () => {
        this.props.userAction({ name: 'david', email: 'david@mail.com' });
        this.setState({ loading: false });
      },
      1000
    );
  }

  shouldComponentUpdate(nextProps, nextState) {
    /*if (this.props.user !== nextProps.user) {
      return true;
    }
    return false;*/
    return true;
  }

  render() {
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
        <h2>Home</h2> <br/>
        {
          this.state.loading
          ? (<h2>Loading ...</h2>)
          : (
            <div>
              <p>{JSON.stringify(this.props.user)}</p>
            </div>
          )
        }
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
)(Home);
