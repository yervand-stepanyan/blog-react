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
    isCreatePostClicked,
    currentUserId,
    handlePostAdd,
    posts
  } = rest;

  if (path === '/blog-react/auth') {
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
        <Component
          currentUserId={currentUserId}
          handlePostAdd={handlePostAdd}
          posts={posts}
        />
      </Route>
    ) : (
      <Redirect to={{ pathname: '/blog-react/auth' }} />
    );
  }
}
