import React, { useCallback } from 'react';
import ConnectedBookForm from 'containers/ConnectedBookForm';

import { useHistory } from 'react-router-dom';

const NewBook = () => {
  const history = useHistory();

  const backToRoot = () => {
    history.push('/');
  };

  const handleSubmit = useCallback(backToRoot, [history]);
  const handleClickCancel = useCallback(backToRoot, [history]);

  return (
    <ConnectedBookForm onCancel={handleClickCancel} onSubmit={handleSubmit} />
  );
};

export default NewBook;
