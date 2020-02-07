import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Authentication/Login/Login';
import Logout from '../Authentication/Logout/Logout';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false
    };
  }

  handleAuth = isLoggedIn => {
    this.setState({ isLoggedIn: isLoggedIn }, () =>
      console.log(this.state.isLoggedIn)
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
                <Login isLoggedIn={this.handleAuth} />
              )}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
