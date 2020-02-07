import React from 'react';
import './header.css';

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
        <IconButton edge="start" color="inherit" aria-label="blog">
          <HomeIcon style={{ color: 'white' }} fontSize="large" />
          <Typography variant="h4">Blog</Typography>
        </IconButton>
        <Button className="btnLogin" color="inherit" size="large">
          Log in
        </Button>
      </Toolbar>
    </AppBar>
  );
}
