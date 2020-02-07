import React from 'react';
import './login.css';

import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const VARIABLES = {
  title: 'Log in',
  usernameLabel: '* Username',
  passwordLabel: '* Password',
  buttonLabel: 'Log In'
};

export default class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  render() {
    return (
      <div className="loginContainer">
        <div className="loginContent">
          <div className="titleSection">
            <Typography variant="h4">{VARIABLES.title}</Typography>
          </div>
          <div className="inputSection">
            <div className="usernameInput">
              <TextField
                id="standard-basic"
                label={VARIABLES.usernameLabel}
                fullWidth
              />
            </div>
            <div className="passwordInput">
              <TextField
                id="standard-password-input"
                label={VARIABLES.passwordLabel}
                type="password"
                autoComplete="current-password"
                fullWidth
              />
            </div>
            <div className="loginBtn">
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
              >
                {VARIABLES.buttonLabel}
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
