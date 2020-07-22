import React from 'react';
import PropTypes from 'prop-types';
import { toPairs } from 'ramda';

import { Categories, SortMethods } from 'utils/constants';
import { arrayOfBook } from 'utils/types';

import { Grid } from '@material-ui/core';

import { Sort } from '@material-ui/icons';
import Category from './Category';
import Actions from './Actions';

const {
  wantToRead, noCategory, read, reading,
} = Categories;

const BookList = ({
  groupedBooks,
  getCardClickPath,
  getAddBookClickPath,
  getCategoryNameClickPath,
  loading = false,
  order,
  onClickSort,
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
      <Actions order={order} addBookClickPath={getAddBookClickPath()} onClickSort={onClickSort} />
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
  getAddBookClickPath: PropTypes.func.isRequired,
  onClickSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(Object.values(SortMethods)).isRequired,
  loading: PropTypes.bool,
  getCategoryNameClickPath: PropTypes.func,
};

export default BookList;
