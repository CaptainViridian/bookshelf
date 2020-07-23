import React, { useCallback } from 'react';

import PropTypes from 'prop-types';

import { useDispatch, useSelector } from 'react-redux';

import { selectBook } from 'store/book/selectors';
import { addComment, removeBook } from 'store/book/thunks';

import BookView from 'components/BookView';
import { isEmptyObject } from '../utils';

function ConnectedBookView({ onClickDelete, onClickEdit }) {
  const book = useSelector(selectBook);
  const dispatch = useDispatch();

  const handleClickDelete = useCallback((id) => {
    dispatch(removeBook(id));
    onClickDelete();
  }, [dispatch, onClickDelete]);

  const handlePostComment = useCallback((comment) => {
    dispatch(addComment(comment));
  }, [dispatch]);

  return !isEmptyObject(book) && (
    <BookView
      onClickSubmitComment={handlePostComment}
      onClickEdit={onClickEdit}
      onClickDelete={handleClickDelete}
      book={book}
    />
  );
}

ConnectedBookView.propTypes = {
  onClickDelete: PropTypes.func.isRequired,
  onClickEdit: PropTypes.func.isRequired,
};

export default ConnectedBookView;
