import React, { useCallback } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import PropTypes from 'prop-types';

import BookForm from 'components/BookForm';

import { addBook, editBook } from 'store/book/thunks';
import { loadingBook, selectBook } from '../store/book/selectors';

function ConnectedBookForm({ onSubmit, onCancel }) {
  const dispatch = useDispatch();

  const loading = useSelector(loadingBook);
  const book = useSelector(selectBook);

  const handleSubmit = useCallback((newBook) => {
    if (newBook.id) dispatch(editBook(newBook));
    dispatch(addBook({
      ...newBook, timestamp: Date.now(), comments: [],
    }));
    onSubmit();
  }, [dispatch, onSubmit]);

  return (
    <BookForm onSubmit={handleSubmit} onCancel={onCancel} book={book} loading={loading} />
  );
}

ConnectedBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onCancel: PropTypes.func.isRequired,
};

export default ConnectedBookForm;
