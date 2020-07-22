import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import ConnectedBookList from 'containers/ConnectedBookList';

import { actions as booksActions } from 'store/books/reducer';

import { showBookPath, categoryPath, newBookPath } from 'utils/paths';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksActions.categorySet({ category: '' }));
  }, [dispatch]);

  return (
    <ConnectedBookList
      getCategoryNameClickPath={categoryPath}
      getCardClickPath={showBookPath}
      getAddBookClickPath={newBookPath}
    />
  );
};

export default Home;
