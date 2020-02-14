import React from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../Authentication/Login';
import Logout from '../Authentication/Logout';

export default function ProtectedRoute({ component: Component, ...rest }) {
  const {
    isLoggedIn,
    path,
    handleLogIn,
    handleLogOut,
    handleCreatePostClick,
    isCreatePostClicked
  } = rest;

  if (path === '/auth') {
    return isLoggedIn ? (
      <Route path={path}>
        <Logout
          isLoggedIn={handleLogOut}
          isCreatePostClicked={isCreatePostClicked}
          handleCreatePostClick={handleCreatePostClick}
        />
      </Route>
    ) : (
      <Route path={path}>
        <Login
          isLoggedIn={handleLogIn}
          isCreatePostClicked={isCreatePostClicked}
          handleCreatePostClick={handleCreatePostClick}
        />
      </Route>
    );
  } else {
    return isLoggedIn ? (
      <Route path={path}>
        <Component />
      </Route>
    ) : (
      <Redirect to={{ pathname: '/auth' }} />
    );
  }
}
