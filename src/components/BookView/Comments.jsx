import React, { useState } from 'react';

import PropTypes from 'prop-types';

import {
  Button,
  Card,
  CardContent,
  CardHeader,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  Typography,
  TextField,
} from '@material-ui/core';
import { Add } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(2, 4),
    [theme.breakpoints.up('sm')]: {
      width: theme.breakpoints.values.sm / 2,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.breakpoints.values.sm,
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.breakpoints.values.md,
    },
    comment: {
      margin: theme.spacing(1, 0),
    },
  },
}));

const Comments = ({ id, comments, onClickSubmitComment }) => {
  const classes = useStyles();

  const [dialogOpen, setDialogOpen] = useState(false);

  const [newComment, setNewComment] = useState('');

  return (
    <>
      <Card>
        <CardHeader title={(
          <Grid container alignItems="center" justify="space-between">
            <Grid item>Comments</Grid>
            <Grid item>
              <IconButton onClick={() => setDialogOpen(true)} color="primary">
                <Add />
              </IconButton>
            </Grid>
          </Grid>
        )}
        />
        <CardContent className={classes.content}>
          {comments.map((comment) => (
            <div className={classes.comment}>
              <Typography variant="body1">
                "
                {comment.body}
                "
              </Typography>
              <Typography variant="caption">
                Posted:
                {' '}
                {new Date(comment.timestamp).toLocaleDateString('en-US')}
              </Typography>
            </div>
          ))}
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
        <form onSubmit={(e) => {
          e.preventDefault();
          onClickSubmitComment({ parentId: id, body: newComment, timestamp: Date.now() });
          setDialogOpen(false);
        }}
        >
          <DialogTitle>Write a comment</DialogTitle>
          <DialogContent className={classes.content}>
            <TextField
              onChange={(({ target: { value } }) => setNewComment(value))}
              autoFocus
              margin="dense"
              id="name"
              label="Your comment"
              multiline
              rows={3}
              rowsMax={4}
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialogOpen(false)} color="default">
              Cancel
            </Button>
            <Button type="submit" color="primary">
              Post
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  );
};

Comments.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object).isRequired,
  id: PropTypes.number.isRequired,
  onClickSubmitComment: PropTypes.func.isRequired,
};

export default Comments;
