import React from 'react';
import styles from './header.module.css';
import { Link } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SvgIcon from '@material-ui/core/SvgIcon';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const VARIABLES = {
  home: 'Blog',
  createPost: 'Create Post',
  loginButtonLabel: 'Log in',
  logoutButtonLabel: 'Log out'
};

export default function Header({ isLoggedIn }) {
  return (
    <AppBar position="static">
      <Toolbar className={styles.toolbar}>
        <Link to="/">
          <IconButton edge="start" color="inherit" aria-label="blog">
            <HomeIcon style={{ color: 'white' }} fontSize="large" />
            <Typography variant="h4" style={{ color: 'white' }}>
              {VARIABLES.home}
            </Typography>
          </IconButton>
        </Link>
        <Button className="{styles.createPostBtn}" color="inherit" size="large">
          {VARIABLES.createPost}
        </Button>
        <Link to="/auth">
          <Button
            className={styles.loginBtn}
            style={{ color: 'white' }}
            size="large"
          >
            {isLoggedIn
              ? VARIABLES.logoutButtonLabel
              : VARIABLES.loginButtonLabel}
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
