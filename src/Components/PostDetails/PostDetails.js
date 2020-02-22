import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Post from '../PostEditable';
import CreateComment from '../CreateComment';

import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';

const VARIABLES = {
  titlePost: 'Post',
  titleComment: 'Comments'
};

class PostDetails extends React.Component {
  constructor(props) {
    super(props);

    const posts = JSON.parse(localStorage.getItem('posts')) || [];
    const post = posts.find(post => post.userId === this.props.currentUserId);

    this.state = {
      posts,
      post
    };
  }

  render() {
    const { post } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.postsContainer}>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h4">
            {VARIABLES.titlePost}
          </Typography>
        </div>
        <div className={classes.postSection}>
          <Post key={post.id} post={post} />
        </div>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h5">
            {VARIABLES.titleComment}
          </Typography>
        </div>
        <div className={classes.createCommentSection}>
          <CreateComment post={post} />
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostDetails);
