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
    const post = posts.find(post => post.id === this.props.postId);
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    this.state = {
      posts,
      post,
      comments
    };
  }

  onCommentAdd = comment => {
    this.setState(
      state => ({
        comments: [comment, ...state.comments]
      }),
      () => {
        localStorage.setItem('comments', JSON.stringify(this.state.comments));
      }
    );
  };

  onCommentRemove = comments => {
    this.setState({ comments: comments });
  };

  render() {
    const { posts, post, comments } = this.state;
    const { classes, currentUserId, postId } = this.props;

    return (
      <div className={classes.postsContainer}>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h4">
            {VARIABLES.titlePost}
          </Typography>
        </div>
        <div className={classes.postSection}>
          <Post
            key={post.id}
            post={post}
            posts={posts}
            comments={comments}
            currentUserId={currentUserId}
          />
        </div>
        <div className={classes.titleSection}>
          <Typography className={classes.title} variant="h5">
            {VARIABLES.titleComment}
          </Typography>
        </div>
        <div className={classes.createCommentSection}>
          <CreateComment
            post={post}
            onCommentAdd={this.onCommentAdd}
            comments={comments}
            currentUserId={currentUserId}
          />
        </div>
        <div className={classes.commentsSection}>
          <Comments
            comments={comments}
            currentUserId={currentUserId}
            onCommentRemove={this.onCommentRemove}
            postId={postId}
          />
        </div>
      </div>
    );
  }
}

PostDetails.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PostDetails);
