import React from 'react';
import { styles } from './style';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const VARIABLES = {
  title: 'Posts'
};

class Posts extends React.Component {
  constructor(props) {
    super(props);

    const posts = localStorage.getItem('posts') || [];

    this.state = {
      posts
    };
  }

  render() {
    const { posts } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.postsContainer}>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h4" gutterBottom>
            {VARIABLES.title}
          </Typography>
        </div>
        <div>{posts}</div>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Posts);
