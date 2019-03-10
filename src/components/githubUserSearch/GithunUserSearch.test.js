import React from 'react';
import GithubUserSearch  from './GithubUserSearch.js';
import renderer from 'react-test-renderer';


describe('CardList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<GithubUserSearch initialData={{appName:'Title page'}}/>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
