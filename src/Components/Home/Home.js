import React from 'react';
import styles from './home.module.css';
import { Link, Route } from 'react-router-dom';

import Typography from '@material-ui/core/Typography';
import Login from '../Authentication/Login/Login';

const VARIABLES = {
  header: 'There is no post on web-site.',
  textAsLink: 'Log in',
  text: ' and be our first story teller.'
};

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.homeContent}>
        <div className={styles.titleSection}>
          <Typography variant="h5">{VARIABLES.header}</Typography>
        </div>
        <div className={styles.textSection}>
          <Typography variant="h4">
            <Link to="/auth">{VARIABLES.textAsLink}</Link>
            {VARIABLES.text}
          </Typography>
        </div>
        <Route path="/auth">
          <Login />
        </Route>
      </div>
    </div>
  );
}
