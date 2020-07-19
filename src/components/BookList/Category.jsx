import React from 'react';

import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { arrayOfBook } from '../../utils/types';
import BookCard from './BookCard';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: 'inherit',
    },
  },
}));

const Category = ({
  name, books, onNameClickPath, getCardClickPath,
}) => {
  const classes = useStyles();

  return (
    <>
      <Grid item>
        <Link to={onNameClickPath} className={classes.link}>
          <Typography variant="h4">
            {name}
          </Typography>
        </Link>
      </Grid>
      <Grid
        item
        container
        justify="center"
        spacing={3}
        className={classes.list}
      >
        {books.map((book) => (
          <BookCard key={book.id} book={book} onClickPath={getCardClickPath(book.id)} />
        ))}
      </Grid>
    </>
  );
};

Category.propTypes = {
  name: PropTypes.string.isRequired,
  books: arrayOfBook.isRequired,
  onNameClickPath: PropTypes.string.isRequired,
  getCardClickPath: PropTypes.func.isRequired,
};

export default Category;
