import React, { useEffect } from 'react';

import { PropTypes } from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { selectBooks, selectCategory } from 'store/books/selectors';
import { fetchBooksByCategory } from 'store/books/thunks';

import BookList from 'components/BookList';

function CategorizedBookList({ getCardClickPath }) {
  const dispatch = useDispatch();

  const books = useSelector(selectBooks);
  const category = useSelector(selectCategory);

  useEffect(() => {
    dispatch(fetchBooksByCategory(category));
  }, [category, dispatch]);

  const groupedBooks = { [category]: books };

  return (
    <BookList
      getCardClickPath={getCardClickPath}
      groupedBooks={groupedBooks}
    />
  );
}

CategorizedBookList.propTypes = {
  getCardClickPath: PropTypes.func.isRequired,
};

export default CategorizedBookList;
