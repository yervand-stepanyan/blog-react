import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

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

const styles = {
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-start'
  },
  logo: {
    color: 'white',
    textDecoration: 'none'
  },
  loginBtn: {
    marginLeft: 'auto',
    textDecoration: 'none'
  }
};

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
        <Button className="{styles.createPostBtn}" color="inherit" size="large">
          {VARIABLES.createPost}
        </Button>
        <Link to="/auth" className={classes.loginBtn}>
          {isLoggedIn ? (
            <Button style={{ color: 'white' }} size="large">
              {VARIABLES.logoutButtonLabel}
            </Button>
          ) : (
            <Button
              className={classes.loginBtn}
              style={{ color: 'white' }}
              size="large"
            >
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
