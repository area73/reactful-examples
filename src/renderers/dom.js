import React from 'react';
import ReactDOM from 'react-dom';

// import { App } from 'components/App';
import ClassApp from 'components/ClassApp';

import '../styles/index.scss';

ReactDOM.hydrate(
  // <App initialData={window.__R_DATA.initialData} />,
  <ClassApp initialData={window.__R_DATA.initialData}/>,
  document.getElementById('root'),
);
