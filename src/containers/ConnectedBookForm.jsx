import React, { useCallback } from 'react';

import { useDispatch } from 'react-redux';

import PropTypes from 'prop-types';

import BookForm from 'components/BookForm';

import { addBook } from 'store/book/thunks';

function ConnectedBookForm({ onSubmit }) {
  const dispatch = useDispatch();

  const handleSubmit = useCallback((newBook) => {
    dispatch(addBook({
      ...newBook, timestamp: Date.now(), comments: [],
    }));
    onSubmit();
  }, [dispatch, onSubmit]);

  return (
    <BookForm onSubmit={handleSubmit} />
  );
}

ConnectedBookForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ConnectedBookForm;
