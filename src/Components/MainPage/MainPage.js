import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import { styles } from './styles';
import Header from '../Header';
import Home from '../Home';
import CreatePost from '../CreatePost';
import ProtectedRoute from '../ProtectedRoute';

import { withStyles } from '@material-ui/core';

class MainPage extends React.Component {
  constructor(props) {
    super(props);

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const currentId = users.length > 0 ? users[users.length - 1].id + 1 : 1;

    this.state = {
      isLoggedIn: false,
      users,
      currentId,
      isCreatePostClicked: false,
      currentUserId: ''
    };
  }

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
        isLoggedIn: isLoggedIn,
        currentUserId: state.currentId
      }),
      () => {
        console.log(this.state.currentUserId);
        localStorage.setItem('users', JSON.stringify(this.state.users));
      }
    );
  };

  handleLogOut = isLoggedIn => {
    const { users } = this.state;

    const newUsers = users.map(user => ({
      ...user,
      isOnline: false
    }));

    this.setState(
      {
        users: newUsers,
        isLoggedIn: isLoggedIn
      },
      () => localStorage.setItem('users', JSON.stringify(this.state.users))
    );
  };

  handleCreatePostClick = isClicked => {
    this.setState({ isCreatePostClicked: isClicked });
  };

  render() {
    const { isLoggedIn, isCreatePostClicked, currentUserId } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.mainContainer}>
        <Router>
          <Header
            isLoggedIn={isLoggedIn}
            handleCreatePostClick={this.handleCreatePostClick}
          />
          <Switch>
            <Route exact path="/">
              <Home isLoggedIn={isLoggedIn} />
            </Route>
            <ProtectedRoute
              path={'/create'}
              isLoggedIn={isLoggedIn}
              component={CreatePost}
              currentUserId={currentUserId}
            />
            <ProtectedRoute
              path={'/auth'}
              isLoggedIn={isLoggedIn}
              isCreatePostClicked={isCreatePostClicked}
              handleLogIn={this.handleLogIn}
              handleLogOut={this.handleLogOut}
              handleCreatePostClick={this.handleCreatePostClick}
            />
          </Switch>
        </Router>
      </div>
    );
  }
}

MainPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(MainPage);
