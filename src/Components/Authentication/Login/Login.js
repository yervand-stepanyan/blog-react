import React from 'react';
import styles from './login.module.css';

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

  onUsernameChange = event => {
    this.setState({ username: event.target.value });
  };

  onPasswordChange = event => {
    this.setState({ password: event.target.value });
  };

  handleLogIn = () => {
    const { username, password } = this.state;

    if (username && password) {
      const newUser = { username, password };

      this.setState({ username: '', password: '' }, () =>
        this.props.isLoggedIn(true, newUser)
      );
    }
  };

  render() {
    const { username, password } = this.state;

    return (
      <div className={styles.loginContainer}>
        <div className={styles.loginContent}>
          <div className={styles.titleSection}>
            <Typography variant="h4">{VARIABLES.title}</Typography>
          </div>
          <div>
            <div className={styles.usernameInput}>
              <TextField
                id="standard-basic"
                label={VARIABLES.usernameLabel}
                fullWidth
                value={username}
                onChange={e => this.onUsernameChange(e)}
              />
            </div>
            <div className={styles.passwordInput}>
              <TextField
                id="standard-password-input"
                label={VARIABLES.passwordLabel}
                type="password"
                autoComplete="current-password"
                fullWidth
                value={password}
                onChange={e => this.onPasswordChange(e)}
              />
            </div>
            <div className={styles.loginBtn}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                onClick={() => this.handleLogIn()}
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
