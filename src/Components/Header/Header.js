import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import HomeIcon from './HomeIcon';
import { styles } from './styles';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

const VARIABLES = {
  home: 'Blog',
  createPost: 'Create Post',
  loginButtonLabel: 'Log in',
  logoutButtonLabel: 'Log out'
};

function Header(props) {
  const { classes, isLoggedIn } = props;

  return (
    <AppBar position="static">
      <Toolbar className={classes.toolbar}>
        <Link to="/" className={classes.logo}>
          <IconButton edge="start" color="inherit" aria-label="blog">
            <HomeIcon fontSize="large" />
            <Typography variant="h4">{VARIABLES.home}</Typography>
          </IconButton>
        </Link>
        <Link to="/create" className={classes.createPostLink}>
          <Button className={classes.linkBtn} color="inherit" size="large">
            {VARIABLES.createPost}
          </Button>
        </Link>
        <Link to="/auth" className={classes.authLink}>
          {isLoggedIn ? (
            <Button className={classes.linkBtn} size="large">
              {VARIABLES.logoutButtonLabel}
            </Button>
          ) : (
            <Button className={classes.linkBtn} size="large">
              {VARIABLES.loginButtonLabel}
            </Button>
          )}
        </Link>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Header);
