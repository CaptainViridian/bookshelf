import React, { useEffect } from 'react';

import { PropTypes } from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { groupBy } from 'ramda';

import { selectBooks } from 'store/books/selectors';
import { fetchBooks } from 'store/books/thunks';

import { Categories } from 'utils/constants';

import BookList from 'components/BookList';

function ConnectedBookList({ getCardClickPath, getCategoryNameClickPath }) {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);

  useEffect(() => {
    dispatch(fetchBooks());
  }, [dispatch]);

  const groupedBooks = groupBy((book) => book.category || Categories.noCategory, books);

  return (
    <BookList
      getCategoryNameClickPath={getCategoryNameClickPath}
      getCardClickPath={getCardClickPath}
      groupedBooks={groupedBooks}
    />
  );
}

ConnectedBookList.propTypes = {
  getCardClickPath: PropTypes.func.isRequired,
  getCategoryNameClickPath: PropTypes.func.isRequired,
};

export default ConnectedBookList;
