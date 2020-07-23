import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { selectBook } from 'store/book/selectors';
import { removeBook } from 'store/book/thunks';

import BookView from 'components/BookView';

function ConnectedBookView({ onClickDelete, onClickEdit }) {
  const book = useSelector(selectBook);
  const dispatch = useDispatch();

  const handleClickDelete = useCallback((id) => {
    dispatch(removeBook(id));
    onClickDelete();
  }, [dispatch, onClickDelete]);

  return (
    <BookView onClickEdit={onClickEdit} onClickDelete={handleClickDelete} book={book} />
  );
}

ConnectedBookView.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};

export default ConnectedBookView;
