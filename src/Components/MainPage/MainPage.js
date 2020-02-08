import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/';
import Home from '../Home/Home';
import Login from '../Authentication/Login/Login';
import Logout from '../Authentication/Logout/Logout';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    this.state = {
      isLoggedIn: false,
      users,
      currentId
    };
  }

  handleAuth = isLoggedIn => {
    this.setState({ isLoggedIn: isLoggedIn });
  };

  handleLogIn = (isLoggedIn, user) => {
    const { username, password } = user;

    this.setState(
      state => ({
        users: [
          ...state.users,
          {
            id: state.currentId,
            username: username,
            password: password,
            isOnline: true
          }
        ],
        currentId: state.currentId + 1,
        isLoggedIn: isLoggedIn
      }),
      () => {
        localStorage.setItem('users', JSON.stringify(this.state.users));
        // this.props.history.push('/');
        // Router.history.push('/');
        // this.history.push('/');
      }
    );
  };

  render() {
    const { isLoggedIn } = this.state;

    return (
      <div className="mainContainer">
        <Router>
          <Header isLoggedIn={isLoggedIn} />
          <Switch>
            <Route exact path="/">
              <Home isLoggedIn={isLoggedIn} />
            </Route>
            <Route path="/auth">
              {isLoggedIn ? (
                <Logout isLoggedIn={this.handleAuth} />
              ) : (
                <Login isLoggedIn={this.handleLogIn} />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
