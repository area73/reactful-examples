import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from 'components/App';
import GithubUserSearch from 'components/githubUserSearch/GithubUserSearch';

import '../styles/index.scss';

ReactDOM.hydrate(
  // <App initialData={window.__R_DATA.initialData} />,
  <GithubUserSearch initialData={window.__R_DATA.initialData}/>,
  document.getElementById('root'),
);
