import React from 'react';
import styles from './home.module.css';
import { Link, Route } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Login from '../Authentication/Login/Login';

const VARIABLES = {
  header: 'There is no post on web-site.',
  textAsLinkToLogIn: 'Log in',
  textIsNotLoggedIn: ' and be our first story teller.',
  textAsLinkToPosts: 'share your story!',
  textIsLoggedIn: "You've logged in, "
};

export default function Home({ isLoggedIn }) {
  const textIsLoggedIn = `<Link to="/auth">${VARIABLES.textAsLinkToLogIn}</Link>  ${VARIABLES.textIsNotLoggedIn}`;
  const textIsNotLoggedIn = `${VARIABLES.textIsLoggedIn} <Link to="/auth">${VARIABLES.textAsLinkToPosts}</Link>`;
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className={styles.titleSection}>
          <Typography variant="h5">{VARIABLES.header}</Typography>
        </div>
        <div className={styles.textSection}>
          <Typography variant="h4">
            {isLoggedIn ? textIsNotLoggedIn : textIsLoggedIn}
          </Typography>
        </div>
        <Route path="/auth">
          <Login />
        </Route>
      </div>
    </div>
  );
}
