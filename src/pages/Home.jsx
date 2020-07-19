import React from 'react';

import ConnectedBookList from 'containers/ConnectedBookList';

import { showBookPath, categoryPath } from 'utils/paths';

const Home = () => (
  <ConnectedBookList getCategoryNameClickPath={categoryPath} getCardClickPath={showBookPath} />
);

export default Home;
