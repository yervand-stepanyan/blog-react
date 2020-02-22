import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Comment from '../CommentEditable';

class Comments extends React.Component {
  // constructor(props) {
  //   super(props);
  //
  //   // const comments = JSON.parse(localStorage.getItem('comments')) || [];
  //   //
  //   // this.state = {
  //   //   comments
  //   // };
  // }

  render() {
    const { classes, comments, currentUserId, onCommentRemove } = this.props;
    let commentsList = [];
    for (let i = comments.length - 1; i >= 0; i--) {
      commentsList.push(comments[i]);
    }

    return (
      <div className={classes.postsContainer}>
        <div className={classes.postSection}>
          <ul className={classes.ul}>
            {commentsList.map(comment => (
              <Comment
                key={comment.id}
                comment={comment}
                comments={comments}
                currentUserId={currentUserId}
                onCommentRemove={onCommentRemove}
              />
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

Comments.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Comments);
