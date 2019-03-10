import React from 'react';
import ReactDOMServer from 'react-dom/server';

// import { App } from 'components/App';
import  GithubUserSearch  from 'components/githubUserSearch/GithubUserSearch';

export async function serverRenderer() {
  const initialData = {
    appName: 'Rui the King',
  };

  const pageData = {
    title: `Hello ${initialData.appName}`,
  };

  return Promise.resolve({
    initialData,
    initialMarkup: ReactDOMServer.renderToString(
      <GithubUserSearch initialData={initialData} />
    ),
    pageData,
  });
}
