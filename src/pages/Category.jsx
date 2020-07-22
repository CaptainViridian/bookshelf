import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { showBookPath, newBookPath } from 'utils/paths';

import { actions as booksActions } from 'store/books/reducer';

import ConnectedBookList from 'containers/ConnectedBookList';

const Category = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksActions.categorySet({ category: name }));
  }, [dispatch, name]);

  return <ConnectedBookList getAddBookClickPath={newBookPath} getCardClickPath={showBookPath} />;
};

export default Category;
