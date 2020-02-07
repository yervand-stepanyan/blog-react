import React from 'react';
import './header.css';
import { Link, Route } from 'react-router-dom';

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

export default function Header() {
  return (
    <AppBar position="static">
      <Toolbar className="toolbar">
        <Link to="/">
          <IconButton edge="start" color="inherit" aria-label="blog">
            <HomeIcon style={{ color: 'white' }} fontSize="large" />
            <Typography variant="h4" style={{ color: 'white' }}>
              Blog
            </Typography>
          </IconButton>
        </Link>
        <Button className="createPostBtn" color="inherit" size="large">
          Create Post
        </Button>
        <Link to="/auth">
          <Button className="loginBtn" style={{ color: 'white' }} size="large">
            Log in
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
  );
}
