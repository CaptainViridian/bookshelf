import React, { useCallback, useEffect } from 'react';

import { PropTypes } from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { groupBy, type } from 'ramda';

import { selectBooks, selectCategory } from 'store/books/selectors';
import { fetchBooks, fetchBooksByCategory } from 'store/books/thunks';

import { Categories } from 'utils/constants';

import BookList from 'components/BookList';

function ConnectedBookList({
  getCardClickPath,
  getAddBookClickPath,
  getCategoryNameClickPath = () => undefined,
}) {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const category = useSelector(selectCategory);

  useEffect(() => {
    if (category) dispatch(fetchBooksByCategory(category));
    else dispatch(fetchBooks());
  }, [category, dispatch]);

  const groupedBooks = groupBy((book) => book.category || Categories.noCategory, books);

  const handleSort = useCallback((by) => {
    console.log(by);
  }, []);

  return (
    <BookList
      groupedBooks={groupedBooks}
      getCardClickPath={getCardClickPath}
      getAddBookClickPath={getAddBookClickPath}
      getCategoryNameClickPath={getCategoryNameClickPath}
      onClickSort={handleSort}
    />
  );
}

ConnectedBookList.propTypes = {
  getCardClickPath: PropTypes.func.isRequired,
  getAddBookClickPath: PropTypes.func.isRequired,
  getCategoryNameClickPath: PropTypes.func,
};

export default ConnectedBookList;