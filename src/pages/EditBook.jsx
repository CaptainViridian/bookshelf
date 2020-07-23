import React, { useCallback, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchBook } from 'store/book/thunks';
import ConnectedBookForm from 'containers/ConnectedBookForm';
import { showBookPath } from 'utils/paths';

const EditBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const history = useHistory();

  const bookId = parseInt(id);

  const backToShowBook = () => {
    history.push(showBookPath(id));
  };

  const handleSubmit = useCallback(backToShowBook, [history, id]);

  const handleClickCancel = useCallback(backToShowBook);

  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, [dispatch, bookId]);

  return <ConnectedBookForm onCancel={handleClickCancel} onSubmit={handleSubmit} />;
};

export default EditBook;
