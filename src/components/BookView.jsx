import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import { bookType } from 'utils/types';

import {
  Paper, Typography, Grid, Box, Chip, IconButton,
} from '@material-ui/core';

import { Delete } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  paper: {
  },
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
  actions: {
    padding: theme.spacing(3),
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
    title, author, description, category, timestamp,
  },
}) => {
  const classes = useStyles();

  return (
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
      <Grid container alignItems="flex-end" justify={category ? 'space-between' : 'flex-end'} className={classes.actions}>
        {category && (
          <Grid item>
            <Chip label={category} color="primary" />
          </Grid>
        )}
        <Grid item>
          <IconButton className={classes.deleteButton}>
            <Delete />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

BookView.propTypes = {
  book: bookType.isRequired,
};

export default BookView;
