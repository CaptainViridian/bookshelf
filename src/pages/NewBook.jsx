import React, { useCallback } from 'react';
import ConnectedBookForm from 'containers/ConnectedBookForm';

import { useHistory } from 'react-router-dom';

const NewBook = () => {
  const history = useHistory();

  const handleSubmit = useCallback(() => {
    history.push('/');
  });

  return (
    <ConnectedBookForm onSubmit={handleSubmit} />
  );
};

export default NewBook;
