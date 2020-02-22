import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import CreateIcon from '@material-ui/icons/Create';
import { withStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check';
import DeleteIcon from '@material-ui/icons/Delete';
// import Fab from '@material-ui/core/Fab';

function CommentEditable(props) {
  const { classes } = props;
  const { comment, date, userId } = props.comment;
  const users = JSON.parse(localStorage.getItem('users'));
  console.log('users:', users);
  const user = users.find(user => user.id === userId);
  console.log('user:', user);
  const avatar = user.username[0].toUpperCase();

  return (
    <div className={classes.postContainer}>
      <div className={classes.cardSection}>
        <Card className={classes.cardWrapper}>
          <CardContent className={classes.CardContent}>
            <div className={classes.titleSection}>
              <div className={classes.avatarSection}>
                <Avatar className={classes.avatar}>{avatar}</Avatar>
              </div>
              <div>
                <Typography variant="subtitle2" color="textSecondary">
                  {date} by {user.username}
                </Typography>
              </div>
              <div className={classes.editIcon}>
                <IconButton>
                  <CreateIcon />
                </IconButton>
              </div>
            </div>
            <div className={classes.contentSection}>
              <Typography>{comment}</Typography>
            </div>
          </CardContent>
          <CardActions className={classes.CardActions}>
            <div className={classes.buttonsSection}>
              <div className={classes.btnDiv}>
                <IconButton>
                  <DeleteIcon />
                </IconButton>
              </div>
              <div>
                <IconButton>
                  <CheckIcon />
                </IconButton>
              </div>
            </div>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

CommentEditable.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CommentEditable);
