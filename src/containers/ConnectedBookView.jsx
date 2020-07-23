import React from 'react';

import { useSelector } from 'react-redux';
import { selectBook } from 'store/book/selectors';
import BookView from '../components/BookView';

function ConnectedBookView() {
  const book = useSelector(selectBook);

  return (
    <BookView book={book} />
  );
}

export default ConnectedBookView;
