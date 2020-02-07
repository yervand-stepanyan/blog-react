import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from '../Header/Header';
import Home from '../Home/Home';
import Login from '../Authentication/Login/Login';

export default class MainPage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="mainContainer">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/auth">
              <Login />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
