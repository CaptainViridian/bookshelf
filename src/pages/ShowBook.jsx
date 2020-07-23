import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import ConnectedBookView from 'containers/ConnectedBookView';
import { fetchBook } from 'store/book/thunks';

const ShowBook = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const bookId = parseInt(id);

  useEffect(() => {
    dispatch(fetchBook(bookId));
  }, [dispatch, bookId]);

  return (
    <ConnectedBookView />
  );
};

export default ShowBook;
