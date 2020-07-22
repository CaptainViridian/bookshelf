import React from 'react';

import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import { arrayOfBook } from 'utils/types';

import BookCard from './BookCard';

const useStyles = makeStyles((theme) => ({
  list: {
    width: '100%',
    maxWidth: theme.breakpoints.values.md,
  },
  link: {
    textDecoration: 'none',
    '&:visited': {
      color: theme.palette.info.dark,
    },
  },
}));

const Category = ({
  name, books, getCardClickPath, onNameClickPath,
}) => {
  const classes = useStyles();

  const renderTitle = () => <Typography variant="h4">{name}</Typography>;

  return (
    <>
      <Grid item>
        {onNameClickPath
          ? <Link to={onNameClickPath} className={classes.link}>{renderTitle()}</Link>
          : renderTitle()}
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
  onNameClickPath: PropTypes.string,
  getCardClickPath: PropTypes.func.isRequired,
};

export default Category;
