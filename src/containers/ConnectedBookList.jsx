import React, { useCallback, useEffect } from 'react';

import { PropTypes } from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { compose, groupBy, reduce } from 'ramda';

import {
  selectBooks,
  selectCategory,
  selectFilterString,
  selectOrder,
} from 'store/books/selectors';
import { actions } from 'store/books/reducer';
import { fetchBooks, fetchBooksByCategory } from 'store/books/thunks';

import { Categories } from 'utils/constants';

import BookList from 'components/BookList';
import { useFilter, useSortMethod } from 'utils/hooks';

function ConnectedBookList({
  getCardClickPath,
  getAddBookClickPath,
  getCategoryNameClickPath = () => undefined,
}) {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const category = useSelector(selectCategory);
  const order = useSelector(selectOrder);
  const filterString = useSelector(selectFilterString);

  const sort = useSortMethod(order);
  const filter = useFilter(filterString);

  const handleSort = useCallback((by) => {
    dispatch(actions.orderSet({ order: by }));
  }, [dispatch]);

  const handleFilterChange = useCallback((text) => {
    dispatch(actions.filterSet({ text }));
  }, [dispatch]);

  useEffect(() => {
    if (category) dispatch(fetchBooksByCategory(category));
    else dispatch(fetchBooks());
  }, [category, dispatch]);

  const groupedBooks = compose(
    reduce((acc, [categoryName, list]) => ({ ...acc, [categoryName]: sort(list) }), {}),
    Object.entries,
    groupBy((book) => book.category || Categories.noCategory),
    filter,
  )(books);

  return (
    <BookList
      groupedBooks={groupedBooks}
      getCardClickPath={getCardClickPath}
      getAddBookClickPath={getAddBookClickPath}
      getCategoryNameClickPath={getCategoryNameClickPath}
      onFilterChange={handleFilterChange}
      onClickSort={handleSort}
      order={order}
    />
  );
}

ConnectedBookList.propTypes = {
  getCardClickPath: PropTypes.func.isRequired,
  getAddBookClickPath: PropTypes.func.isRequired,
  getCategoryNameClickPath: PropTypes.func,
};

export default ConnectedBookList;
