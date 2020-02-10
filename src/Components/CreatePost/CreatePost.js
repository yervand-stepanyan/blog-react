import React from 'react';
import { styles } from './styles';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CheckIcon from '@material-ui/icons/Check';
import Fab from '@material-ui/core/Fab';

const VARIABLES = {
  title: 'Tell us your story!'
};

class CreatePost extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.createPostContainer}>
        <div className={classes.createPostContent}>
          <Card className={classes.cardSection}>
            <CardContent>
              <Typography className={classes.title} variant="h6" gutterBottom>
                {VARIABLES.title}
              </Typography>
              <div>
                <TextField
                  className={classes.titleTextField}
                  placeholder="Write the title..."
                  id="standard-basic"
                  label="* Title"
                />
              </div>
              <div className={classes.contentDiv}>
                <TextField
                  className={classes.contentTextField}
                  placeholder="Write the post..."
                  id="standard-multiline-static"
                  label="* Content"
                  multiline
                  rows="10"
                />
              </div>
              <div className={classes.btnDiv}>
                <Fab color="primary">
                  <CheckIcon />
                </Fab>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }
}

CreatePost.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CreatePost);
