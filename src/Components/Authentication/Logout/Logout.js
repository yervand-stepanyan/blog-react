import React from 'react';
import styles from './logout.module.css';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const VARIABLES = {
  title: 'Log out',
  text: 'Are you sure you want to log out?',
  buttonLabel: 'Log out'
};

export default class Logout extends React.Component {
  handleLogOut = () => {
    this.props.isLoggedIn(false);
  };

  render() {
    return (
      <div className={styles.logoutContainer}>
        <div className={styles.logoutContent}>
          <div className={styles.logoutTitle}>
            <Typography variant="h4">{VARIABLES.title}</Typography>
          </div>
          <div className={styles.logoutText}>
            <Typography variant="subtitle1">{VARIABLES.text}</Typography>
          </div>
          <div>
            <Button
              variant="contained"
              size="large"
              color="primary"
              onClick={() => this.handleLogOut()}
            >
              {VARIABLES.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
