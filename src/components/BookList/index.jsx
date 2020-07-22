import React from 'react';
import PropTypes from 'prop-types';
import { compose, sort, toPairs } from 'ramda';

import { Categories, SortMethods } from 'utils/constants';
import { arrayOfBook } from 'utils/types';

import { Grid, TextField } from '@material-ui/core';
import { Search } from '@material-ui/icons';

import { makeStyles } from '@material-ui/core/styles';
import Category from './Category';
import Actions from './Actions';
import NoBooksFound from '../NoBooksFound';

const {
  wantToRead, noCategory, read, reading,
} = Categories;

const BookList = ({
  groupedBooks,
  getCardClickPath,
  getAddBookClickPath,
  getCategoryNameClickPath,
  onFilterChange,
  order,
  onClickSort,
}) => {
  const booksByCategory = compose(
    sort((a, b) => (a[0] === noCategory ? -1 : 0)),
    toPairs,
  )(groupedBooks);

  return (
    <>
      <Grid container direction="column" spacing={3} style={{ width: '100%' }}>
        <Grid container item justify="center" alignItems="flex-end" spacing={1}>
          <Grid item>
            <Search color="action" />
          </Grid>
          <Grid item>
            <TextField label="Search" onChange={({ target: { value } }) => onFilterChange(value)} />
          </Grid>
        </Grid>
        {booksByCategory.length > 0 ? (
          <Grid
            spacing={4}
            container
            item
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
        ) : <NoBooksFound />}
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
  onFilterChange: PropTypes.func.isRequired,
  getCategoryNameClickPath: PropTypes.func,
};

export default BookList;
