import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';
import Post from '../PostNonEditable';

import { withStyles } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const VARIABLES = {
  title: 'Posts'
};

class Posts extends React.Component {
  constructor(props) {
    super(props);

    const posts = JSON.parse(localStorage.getItem('posts')) || [];

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
          <Typography className={classes.title} variant="h4">
            {VARIABLES.title}
          </Typography>
        </div>
        <div className={classes.postSection}>
          <ul className={classes.ul}>
            {posts.map(post => (
              <Post key={post.id} post={post} />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Posts);
