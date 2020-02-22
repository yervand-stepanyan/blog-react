import React from 'react';
import PropTypes from 'prop-types';
import { styles } from './styles';
import Post from '../PostEditable';
import CreateComment from '../CreateComment';
import Comments from '../Comments';

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
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    // console.log(this.props.postId);
    // console.log(props.match.params);
    // console.log(props.match.params.id);

    // console.log(this.props.currentUserId);
    // console.log(post);

    this.state = {
      posts,
      post,
      comments
    };
  }

  onCommentAdd = comments => {
    this.setState({ comments });
  };

  render() {
    const { posts, post, comments } = this.state;
    const { classes } = this.props;

    return (
      <div className={classes.postsContainer}>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h4">
            {VARIABLES.titlePost}
          </Typography>
        </div>
        <div className={classes.postSection}>
          <Post key={post.id} post={post} posts={posts} comments={comments} />
        </div>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h5">
            {VARIABLES.titleComment}
          </Typography>
        </div>
        <div className={classes.createCommentSection}>
          <CreateComment post={post} onCommentAdd={this.onCommentAdd} />
        </div>
        <div className={classes.commentsSection}>
          <Comments comments={comments} />
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostDetails);
