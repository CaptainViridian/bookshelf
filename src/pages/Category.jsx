import React, { useEffect } from 'react';

import { useParams } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import { showBookPath } from 'utils/paths';

import { actions as booksActions } from 'store/books/reducer';

import CategorizedBookList from 'containers/CategorizedBookList';

const Category = () => {
  const { name } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(booksActions.categorySet({ category: name }));
  });

  return <CategorizedBookList getCardClickPath={showBookPath} />;
};

export default Category;
