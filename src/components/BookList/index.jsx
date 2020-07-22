import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'ramda';

import { Categories } from 'utils/constants';
import { arrayOfBook } from 'utils/types';

import { Grid } from '@material-ui/core';

import Category from './Category';

const {
  wantToRead, noCategory, read, reading,
} = Categories;

const BookList = ({
  groupedBooks,
  getCardClickPath,
  getCategoryNameClickPath,
  loading = false,
}) => {
  const booksByCategory = toPairs(groupedBooks);

  return (
    <>
      <Grid
        spacing={4}
        container
        direction="column"
        alignItems="center"
      >
        {booksByCategory.map(([name, categoryBooks]) => (
          <Category
            name={name}
            books={categoryBooks}
            onNameClickPath={getCategoryNameClickPath(name)}
            getCardClickPath={getCardClickPath}
          />
        ))}
      </Grid>
    </>
  );
};

BookList.propTypes = {
  groupedBooks: PropTypes.shape({
    [wantToRead]: arrayOfBook,
    [read]: arrayOfBook,
    [reading]: arrayOfBook,
    [noCategory]: arrayOfBook,
  }).isRequired,
  getCardClickPath: PropTypes.func.isRequired,
  getCategoryNameClickPath: PropTypes.func,
  loading: PropTypes.bool,
};

export default BookList;
