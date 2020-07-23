import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import PropTypes from 'prop-types';

import { bookType } from 'utils/types';

import {
  Box, Chip, Grid, IconButton, Paper, Typography,
} from '@material-ui/core';

import { Delete, Edit } from '@material-ui/icons';
import Comments from './Comments';

const useStyles = makeStyles((theme) => ({
  content: {
    padding: theme.spacing(4),
    [theme.breakpoints.up('sm')]: {
      width: theme.breakpoints.values.sm / 2,
    },
    [theme.breakpoints.up('md')]: {
      width: theme.breakpoints.values.sm,
    },
    [theme.breakpoints.up('xl')]: {
      width: theme.breakpoints.values.md,
    },
  },
  footer: {
    padding: theme.spacing(3),
  },
  actions: {
    '& > button': {
      margin: theme.spacing(0, 1),
    },
  },
  deleteButton: {
    padding: 0,
  },
}));

const BookInfo = ({ children, ...props }) => (
  <Grid item>
    <Typography {...props}>{children}</Typography>
  </Grid>
);

const BookView = ({
  book: {
    id, title, author, description, category, timestamp, comments,
  },
  onClickDelete,
  onClickEdit,
  onClickSubmitComment,
}) => {
  const classes = useStyles();

  return (
    <Grid container direction="column" alignItems="center" spacing={3}>
      <Grid item>
        <Paper className={classes.paper}>
          <Grid container direction="column" spacing={3} className={classes.content}>
            <BookInfo variant="h4" color="textSecondary">{title}</BookInfo>
            <BookInfo variant="h5" color="primary">
              Written by:
              {' '}
              {author}
            </BookInfo>
            <BookInfo variant="body1">
              <Box fontStyle="italic">
                {description}
              </Box>
            </BookInfo>
            <BookInfo variant="caption">
              Posted:
              {' '}
              {new Date(timestamp).toLocaleDateString('en-US')}
            </BookInfo>
          </Grid>
          <Grid
            container
            alignItems="center"
            justify={category ? 'space-between' : 'flex-end'}
            className={classes.footer}
          >
            {category && (
            <Grid item>
              <Chip label={category} color="secondary" />
            </Grid>
            )}
            <Grid item className={classes.actions}>
              <IconButton onClick={onClickEdit} color="primary">
                <Edit />
              </IconButton>
              <IconButton onClick={() => onClickDelete(id)} className={classes.deleteButton}>
                <Delete />
              </IconButton>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
      <Grid item>
        <Comments onClickSubmitComment={onClickSubmitComment} id={id} comments={comments} />
      </Grid>
    </Grid>
  );
};

BookView.propTypes = {
  book: bookType.isRequired,
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
  onClickSubmitComment: PropTypes.func.isRequired,
};

export default BookView;
