import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Home from './screens/Home';
import About from './screens/About';
import Contact from './screens/Contact';
import Login from './screens/Login';
import PrivateRoute from './components/PrivateRoute';

import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/contact' component={Contact} />
            <PrivateRoute exact path='/about' component={About} />
            <Route render={() => (<Redirect to='/' />)} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
